import React from "react";
import imgBack_about from '../images/BGGGG.png'
import totem from '../images/Leopart_Totem.png'
import check4 from '../images/task.png'


export const Totems = () => {
    return (
        <section>
            <div className="totems-wrapp">
                <h2>TOTEMS</h2>
                <div className="img-wrapp-totem">
                    <img src={totem} alt="for totem"/>
                    <img src={totem} alt="for totem"/>
                    <img src={totem} alt="for totem"/>
                    <img src={totem} alt="for totem"/>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsum.</p>

                <p></p>
                <div className="bottom-content-wrapp">
                    <div className="left-side-totem">
                        <div className="column-totem">
                            <h3>1.</h3>
                            <img src={totem} alt="for totem"/>
                        </div>
                        <div className="column-totem">
                            <h3>2.</h3>
                            <img src={totem} alt="for totem"/>
                            <img src={totem} alt="for totem"/>
                        </div>
                        <div className="column-totem">
                            <h3>3.</h3>
                            <img src={totem} alt="for totem"/>
                            <img src={totem} alt="for totem"/>
                            <img src={totem} alt="for totem"/>
                        </div>
                        <div className="column-totem">
                            <h3>4.</h3>
                            <img src={totem} alt="for totem"/>
                            <img src={totem} alt="for totem"/>
                            <img src={totem} alt="for totem"/>
                            <img src={totem} alt="for totem"/>
                        </div>
                    </div>

                    <table>
                        <tr>
                            <th></th>
                            <th>Merch, Art prints, Collectibes</th>
                            <th>Tutorials, Brushes, Stl, Obj</th>
                            <th>Uulzalt, zuwulguu awah</th>
                            <th>Hamtran ajillah</th>
                        </tr>
                        <tr>
                            <td>15%</td>
                            <td><img src={check4} alt="for totem"/></td>
                            <td><img src={check4} alt="for totem"/></td>
                            <td><img src={check4} alt="for totem"/></td>
                            <td><img src={check4} alt="for totem"/></td>
                        </tr>
                        <tr>
                            <td>30%</td>
                            <td><img src={check4} alt="for totem"/></td>
                            <td><img src={check4} alt="for totem"/></td>
                            <td><img src={check4} alt="for totem"/></td>
                            <td><img src={check4} alt="for totem"/></td>
                        </tr>
                        <tr>
                            <td>45%</td>
                            <td><img src={check4} alt="for totem"/></td>
                            <td><img src={check4} alt="for totem"/></td>
                            <td><img src={check4} alt="for totem"/></td>
                            <td><img src={check4} alt="for totem"/></td>
                        </tr>
                        <tr>
                            <td>60%</td>
                            <td><img src={check4} alt="for totem"/></td>
                            <td><img src={check4} alt="for totem"/></td>
                            <td><img src={check4} alt="for totem"/></td>
                            <td><img src={check4} alt="for totem"/></td>
                        </tr>
                    </table>

                </div>
            </div>




            <img className="back-img-totem" src={imgBack_about} alt="background"></img>
        </section>
    )
}