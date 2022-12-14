export const getFilteredContacts = ({ contacts }) => {
  const {
    items: { items },
    filter,
  } = contacts;
  if (!filter) {
    return items;
  }

  const normalizedFilter = filter.toLowerCase();
  const filteredItems = items.filter(({ name }) => {
    const normalizedName = name.toLowerCase();
    return normalizedName.includes(normalizedFilter);
  });

  return filteredItems;
};
