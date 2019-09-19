$(function () {
  let score = 0

  // const displayScore = () => {
  //   $('#result').text(score)
  // }

  $('#add5').click(() => {
    score = score + 5

    // update text on html page
    displayScore()
  })

  $('#add10').click(() => {
    score = score + 10

    // update text on html page
    displayScore()
  })

  $('#sub1').click(() => {
    score = score - 1

    // update text on html page
    displayScore()
  })

  $('#zero').click(() => {
    score = 0

    displayScore()
    // update text on html page
  })

  function displayScore () {
    $('#result').text(score)
  }
})
