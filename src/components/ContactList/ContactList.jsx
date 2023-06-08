import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/selectors';

import { List, ListItem} from './ContactList.styled';

function ContactList() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const filterContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
    );
    return (
        <List>
            {filterContacts.map(({ id, name, number }, idx) => (
                <ListItem key={id}>
                    <span>{idx + 1}. {name}: {number} </span>
                </ListItem>
            ))}
        </List>
    );
}

export default ContactList;