import { List, Item } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { getFilter } from "redux/selectors";
import { Contact } from "components/Contact/Contact";
import { useGetContactsQuery } from "redux/contactsAPI";

const ContactList = () => {
    const { data } = useGetContactsQuery();
    console.log(data);
    const filter = useSelector(getFilter);
    console.log(filter);

    const getFilteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return data?.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }
    const filteredContacts = getFilteredContacts();
    console.log(filteredContacts);
    const contacts = filter.length ? filteredContacts : data;
    return (
        <List>
            {contacts && contacts.map(contact => (
                <Item key={contact.id}>
                    <Contact contact={contact} />
                </Item>))}
        </List>
    )
};

export default ContactList;