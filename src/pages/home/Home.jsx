import "./home.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RiDoubleQuotesL } from "react-icons/ri";
import Laura from "../../resources/images/review1.jpeg";
import Person2 from "../../resources/images/sidi.jpg";
import Person3 from "../../resources/images/review3.jpeg";
import Socket2 from "../../resources/images/contact.png";
import { useForm } from "@formspree/react";
import { Button, Form, Input, DatePicker, Rate, Select } from "antd";
import Service1 from "../../extra/cinema.png";
import Service2 from "../../extra/photo.jpg";
import Service3 from "../../extra/short reels.png";
import Service4 from "../../extra/wed-2.jpg";
import Service5 from "../../extra/serial.jpeg";
import Docss from "../../resources/images/docss.webp";
import Icon from "../../resources/images/iccon.png";
const { TextArea } = Input;

const Home = () => {
  const [states, handleSubmit] = useForm("xayzvadn");
  const navigate = useNavigate();

  if (states.succeeded) {
    return (
      <>
        <div>
          <p>Thankyou your booking has been placed!</p>;
        </div>
        {setTimeout(() => {
          navigate("/services");
        }, 1000)}
      </>
    );
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <section className="global">
        <div className="home-grid">
          <div className="home-image">
            <div className="container">
              <div className="over-image">
                <h1>
                  Capture the <span className="span">moments</span> &
                </h1>
                <h1>Make it precious</h1>
                <p
                  style={{
                    textAlign: "left",
                  }}
                >
                  Solution for All Kind of Photography & Videography.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="third-section">
            <div className="ss-heading">
              <h1>We Providing Helpful Services</h1>
            </div>
            <div className="service-grid">
              <div className="details topMargin">
                <img src={Service1} alt="s1" />
                <div className="details-info">
                  <img src={Icon} alt="s1" />
                  <h2>Cinema</h2>
                </div>
              </div>
              <div className="details topMargin">
                <img src={Service2} alt="s1" />
                <div className="details-info">
                  <img src={Icon} alt="s1" />
                  <h2>Photography</h2>
                </div>
              </div>{" "}
              <div className="details topMargin">
                <img src={Service3} alt="s1" />
                <div className="details-info">
                  <img src={Icon} alt="s1" />
                  <h2>Short Reels</h2>
                </div>
              </div>
              <div className="details topMargin">
                <img src={Service4} alt="s1" />
                <div className="details-info">
                  <img src={Icon} alt="s1" />
                  <h2>Marriage Package</h2>
                </div>
              </div>
              <div className="details topMargin">
                <img src={Service5} alt="s1" />
                <div className="details-info">
                  <img src={Icon} alt="s1" />
                  <h2>TV Serial Shooting</h2>
                </div>
              </div>
              <div className="details topMargin">
                <img src={Docss} alt="s1" />
                <div className="details-info">
                  <img src={Icon} alt="s1" />
                  <h2>Documentary Films</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="fourth-section">
            <div className="contact-grid">
              <div>
                <h1>Contact Us</h1>
                <p
                  style={{
                    fontSize: "15px",
                    textAlign: "left",
                  }}
                >
                  Contact us today for all your electrical needs. Our friendly
                  team is ready to assist you with any inquiries or service
                  requests.
                </p>
                <div className="contact-details">
                  <Form onFinish={handleSubmit} layout="vertical">
                    <div className="flex-input">
                      <Form.Item
                        name="FullName"
                        rules={[
                          {
                            required: true,
                            message: "Please input your full name!",
                          },
                        ]}
                      >
                        <Input className="cd-input" placeholder="Full Name" />
                      </Form.Item>
                      <Form.Item
                        name="PhoneNumber"
                        rules={[
                          {
                            required: true,
                            message: "Please input your phone number!",
                          },
                        ]}
                      >
                        <Input
                          className="cd-input"
                          placeholder="Phone Number"
                        />
                      </Form.Item>
                    </div>
                    <div className="flex-input">
                      <Form.Item
                        name="RepairDate"
                        rules={[
                          {
                            required: true,
                            message: "Please choose the date!",
                          },
                        ]}
                      >
                        <DatePicker className="cd-input" />
                      </Form.Item>
                      <Form.Item
                        name="Services"
                        rules={[
                          {
                            required: true,
                            message: "Please choose service you want!",
                          },
                        ]}
                      >
                        <Select
                          defaultValue="Wedding Photo / Video"
                          style={{
                            width: 259,
                          }}
                          onChange={handleChange}
                          options={[
                            {
                              value: "Wedding Photo / Video",
                              label: "Wedding Photo / Video",
                            },
                            {
                              value: "Event Photo / Video",
                              label: "Event Photo / Video",
                            },
                            {
                              value: "Music Video",
                              label: "Music Video",
                            },
                            {
                              value: "Short Video",
                              label: "Short Video",
                            },
                            {
                              value: "Advertisement",
                              label: "Advertisement",
                            },
                            {
                              value: "Documentary",
                              label: "Documentary",
                            },
                            {
                              value: "Others",
                              label: "Others",
                            },
                          ]}
                        />
                      </Form.Item>
                    </div>
                    <Form.Item
                      name="Address"
                      rules={[
                        {
                          required: true,
                          message: "Please input your address!",
                        },
                      ]}
                    >
                      <Input
                        className="single-input"
                        placeholder="Your Address"
                      />
                    </Form.Item>

                    <Form.Item
                      name="Condition"
                      rules={[
                        {
                          required: true,
                          message: "Please give us your message!",
                        },
                      ]}
                    >
                      <TextArea
                        className="text-input"
                        style={{
                          width: "93.5%",
                        }}
                        rows={6}
                        placeholder="Your message for us"
                      />
                    </Form.Item>

                    <Button className="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
              <div>
                <img src={Socket2} alt="socket" />
              </div>
            </div>
          </div>

          <div className="fifth-section">
            <div className="ss-heading">
              <h1>Our Happy Clients</h1>
              <p>
                Join our list of satisfied customers who have experienced
                exceptional service and quality products.
              </p>
            </div>
            <div className="review-grid">
              <div className="review-card">
                <RiDoubleQuotesL size={28} className="quote-icon" />
                <p>
                  I wanted to share my positive experience at your electrical
                  shop. The staff provided excellent customer service, guiding
                  me to the right products for my project. The quality of the
                  items I purchased exceeded my expectations, and the repair
                  service was quick and reliable. I'm grateful for your
                  expertise and highly recommend your shop to anyone seeking
                  top-notch electrical solutions. Thank you for a job well done!
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.9rem",
                  }}
                >
                  <img className="person" src={Laura} alt="person" />
                  <div className="role-div">
                    <h1>Devendra Basyal</h1>
                    <p>Customer</p>
                    <Rate defaultValue={4} />
                  </div>
                </div>
              </div>
              <div className="review-card">
                <RiDoubleQuotesL size={28} className="quote-icon" />
                <p>
                  तपाईको बिजुली पसलमा मेरो अनुभवबाट म कति सन्तुष्ट छु भनी व्यक्त
                  गर्न सक्दिन। स्टाफहरू मलाई सहयोग गर्न माथि र बाहिर गए, मैले
                  उत्तम उत्पादनहरू फेला पारेको सुनिश्चित गर्दै। वस्तुहरूको
                  गुणस्तरले मेरो अपेक्षाहरू पार गर्यो, र मर्मत सेवा असाधारण
                  थियो। म भरपर्दो र उच्च गुणस्तरको विद्युतीय सामानहरू खोज्ने जो
                  कोहीलाई तपाईंको पसल सिफारिस गर्छु। उत्कृष्ट ग्राहक सेवा र
                  अपेक्षाहरू भन्दा बढी उत्पादनहरू प्रदान गर्नुभएकोमा धन्यवाद!
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.9rem",
                  }}
                >
                  <img className="person" src={Person2} alt="person" />
                  <div className="role-div">
                    <h1>Arusi Bhattarai</h1>
                    <p>Customer</p>
                    <Rate defaultValue={4} />
                  </div>
                </div>
              </div>
              <div className="review-card">
                <RiDoubleQuotesL size={28} className="quote-icon" />
                <p>
                  Wow! I am blown away by the service I received at your
                  electrical shop. The staff was friendly, knowledgeable, and
                  helped me find exactly what I needed. The products I purchased
                  were of top-notch quality, and the repair service was
                  efficient and reliable. I am beyond satisfied and will
                  definitely be recommending your shop to friends and family.
                  Thank you for the outstanding experience!
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.9rem",
                  }}
                >
                  <img className="person" src={Person3} alt="person" />
                  <div className="role-div">
                    <h1>Gokandra Basnet</h1>
                    <p>Customer</p>
                    <Rate defaultValue={4} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
