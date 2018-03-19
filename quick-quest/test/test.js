/* global describe it */
const should = require('should')

const stringQuest = require('../app/string-quest')

describe('Assessment Longest Word', () => {
  it('find longest word of "Get Length this example word" | Should Return Number ', (done) => {
    stringQuest.longestWord('Get Length this example word').should.be.Number()
    done()
  })

  it('find longest word of "The quick brown fox jumped over the lazy dog" | Should Return 6 ', (done) => {
    stringQuest.longestWord('The quick brown fox jumped over the lazy dog').should.equal(6)
    done()
  })

  it('find longest word of "May the force be with you" | Should Return 5 ', (done) => {
    stringQuest.longestWord('May the force be with you').should.equal(5)
    done()
  })

  it('find longest word of "What if we try a super-long word such as otorhinolaryngology" | Should Return 19 ', (done) => {
    stringQuest.longestWord('What if we try a super-long word such as otorhinolaryngology').should.equal(19)
    done()
  })
})

describe('Assessment Title Case Sentence', () => {
  it('TitleCase "Im a little tea pot" | Should Return a String ', (done) => {
    stringQuest.titleCase('Im a little tea pot').should.be.String()
    done()
  })
  it('TitleCase "Im a little tea pot" | Should Return Short And Stout ', (done) => {
    stringQuest.titleCase('Im a little tea pot').should.equal('Im A Little Tea Pot')
    done()
  })
  it('TitleCase "sHoRt AnD sToUt" | Short And Stout ', (done) => {
    stringQuest.titleCase('sHoRt AnD sToUt').should.equal('Short And Stout')
    done()
  })
  it('TitleCase "HERE IS MY HANDLE HERE IS MY SPOUT" | Should Return Here Is My Handle Here Is My Spout ', (done) => {
    stringQuest.titleCase('HERE IS MY HANDLE HERE IS MY SPOUT').should.equal('Here Is My Handle Here Is My Spout')
    done()
  })
})
