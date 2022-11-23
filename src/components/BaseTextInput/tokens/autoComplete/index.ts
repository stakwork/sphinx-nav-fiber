export const autoCompleteValuesWeb = {
  billTo: "billing organization",
  city: "billing address-level2",
  country: "billing country-name",
  creditCardCVC: "cc-csc",
  creditCardExpiryDate: "cc-exp",
  creditCardName: "cc-name",
  creditCardNumber: "cc-number",
  currentPassword: "current-password",
  email: "username email",
  firstName: "given-name",
  lastName: "family-name",
  newPassword: "new-password",
  off: "off",
  on: "on",
  oneTimeCode: "one-time-code",
  organization: "organization",
  province: "billing address-level1",
  streetAddress: "billing street-address",
  tel: "tel-national",
  url: "url",
} as const;

export type AutoComplete = keyof typeof autoCompleteValuesWeb;

export const textContentTypeValues = {
  billTo: "name",
  city: "addressCity",
  country: "countryName",
  creditCardNumber: "creditCardNumber",
  currentPassword: "password",
  email: "emailAddress",
  firstName: "givenName",
  lastName: "familyName",
  newPassword: "newPassword",
  off: "none",
  oneTimeCode: "oneTimeCode",
  organization: "organizationName",
  province: "streetAddressLine1",
  streetAddress: "fullStreetAddress",
  tel: "telephoneNumber",
  url: "URL",
} as const;

export type TextContentType = keyof typeof textContentTypeValues;

export const isTextContentType = (
  autoComplete: AutoComplete
): autoComplete is TextContentType => autoComplete in textContentTypeValues;
