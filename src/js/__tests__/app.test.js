import formatNumber from '../app';

test.each([
  ['Russian', '+7 (123) 456-78-90', '+71234567890'],
  ['Russian', '8 (123) 456-78-90', '+71234567890'],
  ['foreign', '+44 7911 123456', '+447911123456'],
])(
  ('formats %s phone numbers correctly'),
  (option, phone, expected) => {
    const result = formatNumber(phone);
    expect(result).toEqual(expected);
  },
);
