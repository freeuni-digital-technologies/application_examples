# სერვერ აპლიკაციის მაგალითი
python და flask-ის გამოყენებით

# 1. ლოკალური აპლიკაცია

### პრერეკვიზიტები
- [python 3](https://www.python.org/downloads/)
- flask

flask-ის დასაინსტალირებლად გაუშვით ბრძანება ტერმინალში
```sh
python3 -m pip install flask
```

### კოდი
- [გადმოწერეთ](https://github.com/freeuni-digital-technologies/application_examples/archive/refs/heads/main.zip) კოდის ფაილები ან დააკლონირეთ გითჰაბის მეშვეობით
- აპლიკაციის კოდი არის ფოლდერში application_examples/flask_example
- ამ კოდის გასაშვებად უნდა გახსნათ ტერმინალი ფოლდერში და ჩაწეროთ `flask run`

# 2. სერვერზე გაშვება

### სერვერის ქირაობა
მე პირადად ვიყენებ hetzner-ის სერვერებს, თუმცა შეგიძლიათ ნებისმიერი vps პროვაიდერი აირჩიოთ. (hetzner საკმაოდ იაფი და ძალიან სანდოა).

### ssh-ით დაკავშირება
ვირტუალური სერვერის შექმნის შემდეგ მოგივათ 
- IP_ADDRESS - თქვენი სერვერის მისამართი. სადაც IP_ADDRESS წერია იგულისხმება ეს მისამართი და IP_ADDRESS-ის მაგივრად უნდა ჩაწეროთ
- პაროლი root (ადმინისტრატორი) ექაუნთისთვიდს

linux & mac:
```sh
ssh root@IP_ADDRESS
```
ამ ბრძანების შემდეგ პროგრამა პირველ დაკავშირებაზე გკითხავთ, ენდობით თ არა მისამართს. სიტყვიერად ჩაწერეთ yes და დააჭირეთ enter-ს. შემდეგ პაროლის შეყვანისას ჩაწერეთ პაროლი, რომელიც მოგივიდათ იმეილზე.

windows-ზე საჭიროა პროგრამა putty-ს გადმოწერა და იქ უნდა შეიყვანოთ user, ip address, password

### გამართვა
ლოკალური აპლიკაციისთვის აუცილებელი მოთხოვნები აქაც ვრცელდება, თუმცა რადგან ახლა უკვე ლინუქსზე ვართ, ბევრი მაუს კლიკის მაგივრად ბრძანებებს შევიყვანთ. 
```sh
apt-get update && apt-get upgrade
apt-get install python3-pip
python3 -m pip install flask
```

### კოდის გადატანა
```sh
git clone https://github.com/freeuni-digital-technologies/application_examples.git
cd application_examples/flask_example
flask run --host=IP_ADDRESS #ჩაანაცვლეთ მისამართით
```
### აპლიკაციასთან წვდომა
თქვენს ბრაუზერში ჩაწერეთ: IP_ADDRESS:5000