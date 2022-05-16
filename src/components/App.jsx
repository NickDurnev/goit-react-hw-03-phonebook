import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import AgreementModal from './AgreementModal';
import Sidebar from './Sidebar';
import { Container } from './App.styled';
import { light, dark, blue } from '../themes';
import Button from './Button';

const timeout = parseInt(light.animationDuration);
let deleteContactID = null;

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    isModalOpen: false,
    isSidebarOpen: false,
    theme: light,
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = value => {
    const { contacts } = this.state;
    const names = contacts.map(contact => contact.name.toLowerCase());
    if (names.includes(value.name.toLowerCase())) {
      toast.error(`${value.name} is already in contacts`);
      return;
    }
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, value] };
    });
  };

  addFilterKey = value => {
    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  checkAgreement = answear => {
    document.querySelector('#modal-1').classList.add('hidden');
    if (answear) {
      this.deleteContact(deleteContactID);
    }
    setTimeout(() => {
      this.setState({ isModalOpen: false });
    }, timeout);
  };

  openModalAgreement = id => {
    deleteContactID = id;
    this.setState({ isModalOpen: true });
  };

  openSidebar = () => {
    this.setState({ isSidebarOpen: true });
  };

  changeTheme = value => {
    this.setState({ theme: value });
    document.querySelector('#sidebar-1').classList.add('hidden');
    setTimeout(() => {
      this.setState({ isSidebarOpen: false });
    }, timeout);
  };

  deleteContact = id => {
    const remainingContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    document.querySelector(`#${id}`).classList.add('hidden');
    setTimeout(() => {
      this.setState({ contacts: [...remainingContacts] });
    }, timeout * 2);
  };

  render() {
    const { contacts, isModalOpen, isSidebarOpen, filter, theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Button
            onClick={() => this.openSidebar()}
            padding={'5px 32px'}
            position={'absolute'}
            positionY={'30px'}
            positionX={'30px'}
          >
            Choose theme
          </Button>
          {isSidebarOpen && (
            <Sidebar id={'sidebar-1'}>
              <Button
                onClick={() => {
                  this.changeTheme(dark);
                }}
                padding="5px 10px"
              >
                Dark
              </Button>
              <Button
                onClick={() => {
                  this.changeTheme(light);
                }}
                padding="5px 10px"
              >
                Light
              </Button>
              <Button
                onClick={() => {
                  this.changeTheme(blue);
                }}
                padding="5px 10px"
              >
                Blue
              </Button>
            </Sidebar>
          )}
          <h1>Phonebook</h1>
          <ContactForm onSubmit={contact => this.addContact(contact)} />

          <h2>Contacts</h2>
          <Filter
            onChange={value => this.addFilterKey(value)}
            filter={filter}
          />
          {contacts.length > 0 && (
            <ContactList
              filterItems={this.filterContacts()}
              onClick={value => this.openModalAgreement(value)}
            />
          )}
          {isModalOpen && (
            <AgreementModal id={'modal-1'}>
              <p>Do you really want delete this contact?</p>
              <Button
                onClick={() => this.checkAgreement(false)}
                padding={'5px 15px'}
              >
                No
              </Button>
              <Button
                onClick={() => this.checkAgreement(true)}
                padding={'5px 15px'}
              >
                Yes
              </Button>
            </AgreementModal>
          )}
          <ToastContainer autoClose={3000} />
        </Container>
      </ThemeProvider>
    );
  }
}
