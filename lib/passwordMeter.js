export default function getStrength(password) {
  if (password.length < 6) {
    return 'weak'
  } else {
    return 'good'
  }  
}