// import { useEffect } from "react";
import PropTypes from "prop-types";
import PhonebookForm from "./PhonebookForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { Container } from "./App.styled";
import { useGetContactsQuery } from "redux/contactsAPI";

export function App() {
  const { isFetching, error } = useGetContactsQuery();

     return (
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm  />
         <h2>Contacts</h2>
          {isFetching && !error && <p>Loading contacts...</p>}
         {error && <p>{error}</p>}
         <Filter />
         <ContactList />
    </Container>
    );
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string
}
