const selectContacts = state => state.contacts.contacts.items;
const selectIsLoading = state => state.contacts.contacts.isLoading;
const selectError = state => state.contacts.contacts.error;
const selectFilter = state => state.contacts.filter;

export { selectContacts, selectIsLoading, selectError, selectFilter };
