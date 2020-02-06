import { Component, Input, HostListener } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { AuthServiceProvider } from "../../../providers/auth-service/auth-service";

/**
 * Generated class for the StudSmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-stud-sms",
  templateUrl: "stud-sms.html"
})
export class StudSmsPage {
  @Input()
  // home: HomePage;
  @HostListener("back")
  responseData: any;
  user_id: any;
  student_info: any;
  isFavorite = false;
  Sms: any = "UnreadMessage";
  food: any;
  client_id: any;
  student_id: any;
  data: any;
  MessageInfo: any;
  count: any = 1;
  test: any = [];
  favorite: any = [];
  message: any;
  UnreadMsg: any;
  ReadMsg: any;
  msgid: any;
  UnreadMsglenth: any;
  Favorite1: any = [];
  favid: any;
  FavId: any;
  FavMsg: any;
  UnFavMsg: any;

  noData: any;
  noDataValue: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public alertCtrl: AlertController
  ) {
    this.food = {
      id: 3,
      name: "Pizza",
      price: 16
    };

    let orders = [
      { food_id: 2, table_id: 5 },
      { food_id: 2, table_id: 5 },
      { food_id: 1, table_id: 5 },
      { food_id: 3, table_id: 5 },
      { food_id: 1, table_id: 5 }
    ];
    console.log(orders);
    const index = orders.findIndex(order => order.food_id === this.food.id);
    this.Favorite1.push(orders);
    console.log(this.Favorite1);
    //orders.splice(index, 1);
    // console.log(orders);
    this.getMessagesInfo();
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad SmsPage");

    const a = [{ id: 123, randomvalue: "hello", othervalue: "sup" }];

    const b = [
      { id: 123, randomvalue: "hello", othervalue: "sup" },
      { id: 125, randomvalue: "sup", othervalue: "hello" }
    ];

    const bindex = b.reduce((acc, obj) => {
      acc[obj.id] = obj;
      return acc;
    }, {});
    const unique = a.filter(obj => bindex[obj.id]);
    console.log(unique);
    console.log("ionViewDidLoad SmsPage");
  }
  back() {
    this.navCtrl.pop();
    //this.home.getMessagesInfo();
  }
  getMessagesInfo() {
    let getMessageUrl = "/messages";
    this.authService.getMessageData(getMessageUrl).subscribe(
      data => {
        console.log(data);
        this.data = JSON.parse(data._body);
        this.MessageInfo = [this.data][0].data;

        console.log(this.MessageInfo);
        if (this.MessageInfo.length == 0) {
          this.noData = true;
          this.noDataValue = " No Items to Display";
        }
        if ((this.message = JSON.parse(localStorage.getItem("MessageId")))) {
          this.message = JSON.parse(localStorage.getItem("MessageId"));
          console.log(this.message);

          const bindex = this.message.reduce((acc, obj) => {
            acc[obj.id] = obj;
            console.log("acc:", acc);
            return acc;
          }, {});

          console.log("bindex:", bindex);

          this.UnreadMsg = this.MessageInfo.filter(obj => !bindex[obj.id]);
          console.log(this.UnreadMsg);
          this.UnreadMsglenth = this.UnreadMsg.length;
          console.log(this.UnreadMsglenth);
          this.ReadMsg = this.MessageInfo.filter(obj => bindex[obj.id]);
          console.log(this.ReadMsg);
        } else {
          this.UnreadMsg = this.MessageInfo;
          this.UnreadMsglenth = this.MessageInfo.length;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  favoriteFilm(x) {
    this.isFavorite = true;
  }

  unfavoriteFilm(x) {
    console.log(x);

    this.isFavorite = false;
  }

  view(x) {
    console.log(x);
    if ((this.test = JSON.parse(localStorage.getItem("MessageId")))) {
      this.test = JSON.parse(localStorage.getItem("MessageId"));

      const alert = this.alertCtrl.create({
        title: x.institution_name,
        subTitle: x.message_content,
        buttons: ["OK"]
      });
      alert.present();

      this.msgid = { id: x.id };
      this.test.push(this.msgid);
      this.test = this.test.reduce(
        (x, y) => (x.findIndex(e => e.id == y.id) < 0 ? [...x, y] : x),
        []
      );
      console.log(this.test);
      localStorage.setItem("MessageId", JSON.stringify(this.test));
      this.getMessagesInfo();
    } else {
      const alert = this.alertCtrl.create({
        title: x.institution_name,
        subTitle: x.message_content,
        buttons: ["OK"]
      });
      alert.present();
      this.test = [{ id: 2011300 }];
      this.msgid = { id: x.id };
      this.test.push(this.msgid);
      this.test = this.test.reduce(
        (x, y) => (x.findIndex(e => e.id == y.id) < 0 ? [...x, y] : x),
        []
      );
      console.log(this.test);
      localStorage.setItem("MessageId", JSON.stringify(this.test));
      this.getMessagesInfo();
    }
  }

  deleteMessage(MsgId) {
    const confirm = this.alertCtrl.create({
      title: "Do you want to delete this message ?",

      buttons: [
        {
          text: "No",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "Yes",
          handler: () => {
            console.log(MsgId);

            console.log("Agree clicked");
            this.authService.getMessageDelete(MsgId).subscribe(
              data => {
                console.log(data);
                this.getMessagesInfo();
              },
              err => {
                console.log(err);
              }
            );
          }
        }
      ]
    });
    confirm.present();
  }
  Favorite(x) {
    console.log(x);
    if ((this.favorite = JSON.parse(localStorage.getItem("FavoriteId")))) {
      this.favorite = JSON.parse(localStorage.getItem("FavoriteId"));

      this.favid = { id: x.id };
      this.favorite.push(this.favid);
      this.favorite = this.favorite.reduce(
        (x, y) => (x.findIndex(e => e.id == y.id) < 0 ? [...x, y] : x),
        []
      );
      console.log(this.favorite);
      localStorage.setItem("FavoriteId", JSON.stringify(this.favorite));
      //this.getMessagesInfo();
    } else {
      this.favorite = [{ id: 2011300 }];
      this.msgid = { id: x.id };
      this.favorite.push(this.msgid);
      this.favorite = this.favorite.reduce(
        (x, y) => (x.findIndex(e => e.id == y.id) < 0 ? [...x, y] : x),
        []
      );
      console.log(this.favorite);
      localStorage.setItem("FavoriteId", JSON.stringify(this.favorite));
      //this.getMessagesInfo();
    }
  }
}
