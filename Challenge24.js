// make_tags('i', 'Yay') → '<i>Yay</i>'
// make_tags('i', 'Hello') → '<i>Hello</i>'
// make_tags('cite', 'Yay') → '<cite>Yay</cite>'

function make_tags(a, b) {
  return "<"+a+"> "+b+"</"+a+">"
}
