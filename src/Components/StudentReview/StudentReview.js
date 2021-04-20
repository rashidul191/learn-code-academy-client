import React from 'react';
import './StudentReview.css';
import student from '../../Images/Rashidul.jpg'

const StudentReview = () => {
    return (
        <section id="student-Review">
            <div className="container text-center py-5">
                <h4 className="">***Students Review***</h4>
                <div id="carouselExampleFade" class="carousel slide " data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>                       
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="row text-center">
                                <div className="col-lg-6 col-md-12">

                                    <img src="https://scontent.fdac2-1.fna.fbcdn.net/v/t1.6435-1/p200x200/127781556_2884960451787694_7127207323598489442_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeGjvmpfisNpVdtK1_3EoWkNGi5sHRgW174aLmwdGBbXvvgbK4NwLSItPH7TIruzvqRpGExDB5zg0traJyok3S5h&_nc_ohc=XaWBTADaBZsAX_ccJHF&_nc_ht=scontent.fdac2-1.fna&tp=6&oh=1c0cc0c68249bc1200e59af8366397a8&oe=60A53003" class="d-block " alt="..." />
                                    <h4>Abir Hasan</h4>
                                    <p className="lead ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet expedita nemo sint tenetur praesentium saepe voluptatibus nihil repellendus dolor iusto eligendi, aliquid molestiae, accusantium vero? Fugiat error sapiente omnis!</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <img src="https://scontent.fdac2-1.fna.fbcdn.net/v/t1.6435-9/51762737_2395891997305210_9056659419516895232_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGMz6aBU0u1WEcF0TUGc_5b1UjJjWSKUe3VSMmNZIpR7T1D3WsZvPq-HCBqnTA7P2ZZS-x9HsQ5Z6J1i1rNkCoe&_nc_ohc=sxrcCna9dtMAX_JGq6x&_nc_ht=scontent.fdac2-1.fna&oh=0d0a5fc9a93012a77fa172fc16533e04&oe=60A34ED2" class="d-block " alt="..." />
                                    <h4>Samrat</h4>
                                    <p className="lead ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet expedita nemo sint tenetur praesentium saepe voluptatibus nihil repellendus dolor iusto eligendi, aliquid molestiae, accusantium vero? Fugiat error sapiente omnis!</p>
                                </div>
                            </div>

                        </div>
                        <div class="carousel-item">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <img src="https://scontent.fdac2-1.fna.fbcdn.net/v/t1.6435-9/120903028_1306464016362311_7757203577228446030_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEOwEq-Qy1juwA3Mp_LP0Izu-6TwdFjLra77pPB0WMutmaTZqhl4kPyVSoqTFyDgO_XmRaVBgCHEDPszTTHlxwg&_nc_ohc=BQ7k3ll1mfQAX9bCo0j&_nc_ht=scontent.fdac2-1.fna&oh=042fa9cfae40c6dd159b2c5f12fa5087&oe=60A5DCF4" class="d-block " alt="..." />
                                    <h4>Tonmoy Kumar</h4>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet expedita nemo sint tenetur praesentium saepe voluptatibus nihil repellendus dolor iusto eligendi, aliquid molestiae, accusantium vero? Fugiat error sapiente omnis!</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <img src="https://scontent.fdac2-1.fna.fbcdn.net/v/t1.6435-9/104756059_730589207764929_8928822583532062886_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_eui2=AeH_4R0xqd-GoY3-j_HCNUDe0GF83uK5cvzQYXze4rly_JQMX-IFZjbVLXDdhTaZurGxWe1AWxOjWUXAtLpyswOQ&_nc_ohc=o1j5P-llByYAX_BXG2_&_nc_ht=scontent.fdac2-1.fna&oh=a7ba35896497d974c7e458c1669da999&oe=60A2AD1C" class="d-block " alt="..." />
                                    <h4>Umme Salma</h4>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet expedita nemo sint tenetur praesentium saepe voluptatibus nihil repellendus dolor iusto eligendi, aliquid molestiae, accusantium vero? Fugiat error sapiente omnis!</p>
                                </div>
                            </div>

                        </div>
                        <div class="carousel-item">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <img src="https://scontent.fdac2-1.fna.fbcdn.net/v/t1.6435-9/64853954_968105366920715_7300228412059156480_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeGt5_6FkaqpXDj5SDHpr9H-5CNd-NDWwGbkI1340NbAZiHQ-LMmB-AynBn-d5jY2KwxrOFONDXg-5d00a3MPDXY&_nc_ohc=Ug9-h1HxXI4AX_J0Xt1&_nc_ht=scontent.fdac2-1.fna&oh=59cbf1db2b2e78683ed4bd44c97c99ee&oe=60A52908" class="d-block " alt="..." />
                                    <h4>Tasmiatul Jannat</h4>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet expedita nemo sint tenetur praesentium saepe voluptatibus nihil repellendus dolor iusto eligendi, aliquid molestiae, accusantium vero? Fugiat error sapiente omnis!</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <img src="https://scontent.fdac2-1.fna.fbcdn.net/v/t1.6435-9/89714816_1597656020392933_3910092179934019584_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ad2b24&_nc_eui2=AeGox8jZWYwtS5ZRfbzjINoCLciZdNEnIx4tyJl00ScjHvxuEGZKvwOM_ehgfTqCq9dw4AMqQX0K8TQXCu9Y8KY_&_nc_ohc=VbFxwLBiCqcAX8vqB7-&_nc_ht=scontent.fdac2-1.fna&oh=643a8f3771572b8ac58eb79554ed1a9f&oe=60A4D86D" class="d-block " alt="..." />
                                    <h4>Ñømâň Shěîkh</h4>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet expedita nemo sint tenetur praesentium saepe voluptatibus nihil repellendus dolor iusto eligendi, aliquid molestiae, accusantium vero? Fugiat error sapiente omnis!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default StudentReview;