from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello():

    # a = 'hello ' + 1
    return "Hello World"


@app.route('/posts')
def posts():
    # a = 'hello ' + 1
    return "This is a posts page"

i = 0

@app.route('/counter')
def counter(): 
    global i
    i = i + 1
    # if i > 10:
        # a = 'hello' + 1
    end = 'th'
    if i % 10 == 1:
        end = 'st'
    if i % 10 == 2:
        end = 'nd'
    if i % 10 == 3:
        end = 'rd'
    return 'Hello, ' + str(i) + end + ' visitor!'


