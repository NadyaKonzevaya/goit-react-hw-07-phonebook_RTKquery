import { Button } from 'components/ContactList/ContactList.styled';
import { useDeleteContactMutation } from 'redux/contactsAPI';

export const Contact = ({ contact }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <>
      {contact.name}: {contact.phone}
      <Button onClick={() => deleteContact(contact.id)} disabled={isDeleting}>
        Delete
      </Button>
    </>
  );
};
