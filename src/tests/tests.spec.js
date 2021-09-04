import { urlValidator } from '../client/js/urlValidator'

describe('Testng urlValidator() should exist', () => {
    test('It should exist', () => {
        expect(urlValidator).toBeDefined()
    })
})

describe('Testng urlValidator() functionality', () => {
    var url = 'https://www.studentnewsdaily.com/daily-news-article'
    test('It should return true', () => {
        const response = urlValidator(url)
        expect(response).toBe(true)
    })
})
describe('Testng urlValidator() functionality', () => {
    var url = 'daily-news-article'
    test('It should return false', () => {
        const response = urlValidator(url)
        expect(response).toBe(false)
    })
})
