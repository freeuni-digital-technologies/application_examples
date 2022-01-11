from flask import Flask

app = Flask(__name__)

i = 0

@app.route('/addVisitor')
def addVisitor():
    global i 
    i = i+1
    return 'count increased'

@app.route('/counter')
def counter(): 
    global i
    return str(i)


