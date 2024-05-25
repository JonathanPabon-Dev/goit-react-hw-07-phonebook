const selectContacts = state => state.contact.contacts.items;
const selectIsLoading = state => state.contact.contacts.isLoading;
const selectError = state => state.contact.contacts.error;
const selectFilter = state => state.contact.filter;

export { selectContacts, selectIsLoading, selectError, selectFilter };
