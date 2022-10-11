export const loaderData = () => {
    const getdata = window.location.href.split('/')
    const geturl = getdata.length
    const id = getdata[geturl - 1]
    const quiz = fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
    console.log(quiz)
    return quiz;
}