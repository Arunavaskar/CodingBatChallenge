function parrot_trouble(talking, hour){
  return (talking && hour < 7) || (talking && hour > 20)
}
