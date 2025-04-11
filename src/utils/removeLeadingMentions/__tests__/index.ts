import { removeLeadingMentions } from '../index'

describe('removeLeadingMentions', () => {
  test('removes single leading mention', () => {
    expect(removeLeadingMentions('@user Hello world')).toBe('Hello world')
  })

  test('removes multiple leading mentions', () => {
    expect(removeLeadingMentions('@user1 @user2 @user3 Hello world')).toBe('Hello world')
  })

  test('handles extra spaces after mentions', () => {
    expect(removeLeadingMentions('@user1   @user2   Hello world')).toBe('Hello world')
  })

  test('does not remove mentions within the text', () => {
    expect(removeLeadingMentions('Hello @user world')).toBe('Hello @user world')
  })

  test('returns same text if no leading mentions', () => {
    expect(removeLeadingMentions('Hello world')).toBe('Hello world')
  })

  test('handles empty string', () => {
    expect(removeLeadingMentions('')).toBe('')
  })
})
