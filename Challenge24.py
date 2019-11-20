# make_tags('i', 'Yay') → '<i>Yay</i>'
# make_tags('i', 'Hello') → '<i>Hello</i>'
# make_tags('cite', 'Yay') → '<cite>Yay</cite>'

def make_tags(a,b):
    return return "<"+a+">"+b+"</"+a+">"
