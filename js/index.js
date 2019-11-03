$(function () {
  let score = 0

  $('#add5').click(() => {
    score = score + 5

    // update text on html page
    displayScore()
  })

  $('#add10').click(() => {
    score = score + 10

    displayScore()
  })

  $('#sub1').click(() => {
    score = score - 1

    displayScore()
  })

  $('#zero').click(() => {
    score = 0

    displayScore()
  })

  function displayScore () {
    $('#result').text(score)
  }
})
