export default function getStrenght(password) {
  if (password.length < 6) {
    return 'weak'
  } else {
    return 'good'
  }  
}