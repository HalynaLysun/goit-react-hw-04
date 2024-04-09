import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import contacts from "../contacts.json";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";

export default function App() {
  const [contactData, setContactsData] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return contacts;
  });

  const [inputValue, setInputValue] = useState("");

  const addContacts = (newContact) => {
    setContactsData((prevContacts) => {
      return [...prevContacts, { ...newContact, id: nanoid() }];
    });
  };

  const deleteContact = (contactId) => {
    setContactsData((prevContacts) => {
      return prevContacts.filter((con) => con.id !== contactId);
    });
  };

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
    console.log(evt.target.value);
  };

  const arrContacts = contactData.filter((el) => {
    const contactName = el.name.toLowerCase();
    return contactName.includes(inputValue.toLowerCase());
  });

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contactData));
  }, [contactData]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        init={initialValues}
        valid={FeedbackSchema}
        onAdd={addContacts}
      />
      <SearchBox input={inputValue} onChange={handleChange} />
      <ContactList arrContacts={arrContacts} onDelete={deleteContact} />
    </div>
  );
}
