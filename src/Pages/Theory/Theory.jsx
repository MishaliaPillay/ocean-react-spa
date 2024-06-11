import React from "react";

import "./Theory.css"; // Ensure you have the CSS file imported

const Theory = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#077fe8"
          fillOpacity="1"
          d="M0,96L40,117.3C80,139,160,181,240,170.7C320,160,400,96,480,64C560,32,640,32,720,74.7C800,117,880,203,960,202.7C1040,203,1120,117,1200,101.3C1280,85,1360,139,1400,165.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <section className="introParagraph ">
        <h3 className="thirdHeading">Theory Section</h3>
        <article className="blogContent">
          <p className="blurbParagraph ">
            Here we showcase essays and independant research.
          </p>
        </article>
      </section>
      <section className="blogPost">
        <article className="blogContent">
          <summary>
            <h3 className="thirdHeading">
              Critical Analysis Essay on Net/Web Art
            </h3>
            <p className="blogDate">20 April 2024</p>
          </summary>
          <p className="blurbParagraph ">
            This essay is a critical examination of the Net Art, “it&apos;s
            doing It”. This is an artwork that was created by nine artists who
            wrote computer programs that took instructions as parameters, and
            this resulted in computer-generated art. This analysis will be
            carried out through the usage of the framework by Marshall McLuhan,
            “The medium is the message”, with a focus on the effects of choosing
            the Internet as the medium for this work. An evaluation through the
            lens of Intermedial studies will serve as a framework to unpack the
            content of the work itself. The analysis will help determine if
            “It&apos;s doing It”, is a relevant and effective example of Net Art
            that can inspire and inform the designers of today.
          </p>
          <h2 className="secondHeading">What is Net Art?</h2>
          <p className="blurbParagraph ">
            For one to understand Net Art one needs to break the bounds of what
            media forms art can be created in (Ricci, 2020). Conventionally art
            is in the form of a painting or a sculpture, Benedetta Ricci
            challenges readers to “envision an algorithm, software or code” as
            art. Net Art is an art that cannot exist without the Internet, it is
            created for, composed through, and displayed on the Internet.
          </p>
          <p className="blurbParagraph ">
            Chatel (2019) describes Net Art as “process-oriented” as artists
            explore the vastness of this new media type, thus the spectrum of
            topics and areas covered in Net Art is endless. Artists tackle the
            complex nature of “networks and computing structures”- this is
            important to note since designers create these structures with code,
            and it is through the creation of Net Art that they become “artists”
            who challenge these very systems.
          </p>
          <p className="blurbParagraph ">
            A “sub-genre” of Net Art is Software Art which is “visualizing the
            result from a set of algorithms and codes”. Based on the data given
            to the algorithm different results may be yielded, the visual aspect
            helps identify gaps in the data which is a useful tool that can aid
            in the prevention of misrepresentation. Software art is created when
            the concept is encoded in the system by the artists and beyond the
            code the artist has no control over the resulting artwork, thus
            unique and interesting visuals arise.
          </p>
          <h2 className="secondHeading">
            Explain “it&apos;s doing It” and its relevance for designers.
          </h2>
          <p className="blurbParagraph ">
            This artwork falls part of Software art, there are a total of nine
            artists that worked on this project and each artist created a
            computer program that encoded instructions (see Figures 1-9) into
            the program and for 45 days these programs generated one image each
            day. This Net Art ran from 11 December 2015 till 24 January 2016,
            and every artist's computer program generated an image related to
            their instruction - the viewer is unable to see the code and only
            sees the resulting images. This was an interesting project since the
            computer programs ran the same code every day, yet the results
            differed in small and large ways each time. This is equivalent to a
            user asking ChatGPT the same question every day in the exact same
            format as they did the previous day, but the AI responds uniquely
            each time.
          </p>
          <article className="imageContainer">
            <figure>
              <img
                className="blogImg"
                src={require(`../../Images/Essay/prompt1.png`)}
                alt="Figure 1 Prompt 1"
              />
              <figcaption className="blogImgCaption">
                Figure 1 Prompt 1
              </figcaption>
            </figure>
            <figure>
              <img
                className="blogImg"
                src={require(`../../Images/Essay/prompt2.png`)}
                alt="Figure 2 Prompt 2"
              />
              <figcaption className="blogImgCaption">
                Figure 2 Prompt 2
              </figcaption>
            </figure>
            <figure>
              <img
                className="blogImg"
                src={require(`../../Images/Essay/prompt3.png`)}
                alt="Figure 3 Prompt 3"
              />
              <figcaption className="blogImgCaption">
                Figure 3 Prompt 3
              </figcaption>
            </figure>
            <figure>
              <img
                className="blogImg"
                src={require(`../../Images/Essay/prompt4.png`)}
                alt="Figure 4 Prompt 4"
              />
              <figcaption className="blogImgCaption">
                Figure 4 Prompt 4
              </figcaption>
            </figure>
            <figure>
              <img
                className="blogImg"
                src={require(`../../Images/Essay/prompt5.png`)}
                alt="Figure 5 Prompt 5"
              />
              <figcaption className="blogImgCaption">
                Figure 5 Prompt 5
              </figcaption>
            </figure>
            <figure>
              <img
                className="blogImg"
                src={require(`../../Images/Essay/prompt6.png`)}
                alt="Figure 6 Prompt 6"
              />
              <figcaption className="blogImgCaption">
                Figure 6 Prompt 6
              </figcaption>
            </figure>
            <figure>
              <img
                className="blogImg"
                src={require(`../../Images/Essay/prompt7.png`)}
                alt="Figure 7 Prompt 7"
              />
              <figcaption className="blogImgCaption">
                Figure 7 Prompt 7
              </figcaption>
            </figure>
            <figure>
              <img
                className="blogImg"
                src={require(`../../Images/Essay/prompt8.png`)}
                alt="Figure 1 Prompt 1"
              />
              <figcaption className="blogImgCaption">
                Figure 8 Prompt 8
              </figcaption>
            </figure>
            <figure>
              <img
                className="blogImg"
                src={require(`../../Images/Essay/prompt9.png`)}
                alt="Figure 9 Prompt 9"
              />
              <figcaption className="blogImgCaption">
                Figure 9 Prompt 9
              </figcaption>
            </figure>
          </article>
          <p className="blurbParagraph ">
            This Net Art is highly relevant to designers as they go on to create
            systems that require data and are at times in charge of finding ways
            of representing this data, “it&apos;s doing It” helps designers see
            that the systems they create are generative and it forces them to
            reflect on their processes for deciding on inclusion parameters.
            This is also relevant as it is more current than most Net Art that
            exists online - which are either related to a different field or run
            on programs that are no longer supported. “it&apos;s doing it” is
            still accessible online.
          </p>
          <p className="blurbParagraph ">
            It can also be seen as the preface of what was to come since many
            people have now gained access to some form of AI and it has been
            proven time and time again that AI cannot be trusted as a reliable
            source. This Net Art showed that not every result would be the same
            and that some results are more accurate than others. Thus, this is
            relevant to designers as well as users as it informs both groups of
            the somewhat randomized results that these algorithms give.
          </p>
          <h2 className="secondHeading">
            How does the choice of medium affect the message?
          </h2>
          <p className="blurbParagraph ">
            The choice of medium acts as the mould that outlines where and how a
            work is situated in the user's minds (McLuhan, 2006, p. 108) . This
            can be understood through the concept of convention as explained by
            Mailloux (1983), which suggests that practice becomes a convention
            when it is adopted by many. A convention is chosen for its ability
            to encapsulate and create regularity around a shared interest. The
            regularity helps set up “expectations” of patterns in behaviour thus
            if a problem arises a solution is found easily(Mailloux, 1983, p.
            399). This helps designers make informed decisions on how they
            create, and this helps users understand what is created. An example
            in “It&apos;s doing it” is that the designers faced a problem of how
            they allow users to navigate through the different days, the
            solution is to create a drop-down menu of x-height but allow the
            user to scroll through the list (see Figure 10). The user can
            understand this based on their previous web interactions when they
            see the scroll bar or the dropdown menu. In this example is evident
            that the medium affects “human association and action” (McLuhan,
            2006, p. 108).
          </p>
          <figure>
            <img
              className="blogImgSmall"
              src={require(`../../Images/Essay/Dropdownmenu.png`)}
              alt="Figure 10 Drop down menu"
            />
            <figcaption className="blogImgCaption">
              Figure 10 Drop down menu
            </figcaption>
          </figure>
          <h2 className="secondHeading">
            What role does the Internet play as a medium?
          </h2>
          <p className="blurbParagraph ">
            The Internet is described as a “disruptive medium (Ricci, 2020) as
            it has changed the way art is created and displayed (Carrier, 2020).
            The appeal of the “aura” which is the uniqueness and “essence” held
            by the original artwork is impacted by art online. An example is,
            people travelling to see the original artwork in a museum which is
            possibly kept at a distance in a glass case however with the
            Internet as a medium, users can get up close and personal with the
            work, and they can zoom in and interact in different ways. Another
            example is “it's doing it” which has 45 iterations of art for each
            prompt, this affects the uniqueness of the work since in total there
            are 405 pieces of art to engage with, but the aura remains as each
            artwork existed in its section own of the webpage for 24hrs.
          </p>
          <p className="blurbParagraph ">
            The Internet is also a medium of communication since it connects
            users and has changed the interaction from being “one to many ” into
            “many to many”, thus knowledge is spread faster as more people are
            connected (David and Mariswamy, 2014). This was an advantage for
            “it&apos;s doing it” since it allowed the artists to collaborate as
            a group and gave the audience more art to engage with. This is also
            useful as designers around the globe have access to this and can
            reap the benefits of learning from the content of what these artists
            have created.
          </p>
          <h2 className="secondHeading">
            Explain the Intermediality of the Internet.
          </h2>
          <p className="blurbParagraph ">
            As stated previously, how the art is configured affects how the
            audience situates the work, McLuhan (2006) takes this even further
            and states that the content of the medium is another medium in
            itself. The content of the medium cannot always be considered as the
            most accurate representation of the artwork. An example from “it's
            doing it” is the two prompts in Figures 11 and 12, this is because
            if the user looked at the images generated for Figure 11, they would
            notice that there are only small differences in the different
            iterations, but the framing and main features remain. However, for
            Figure 12 the colour and features vary each time with different
            “rock” like structures. The conclusion for Figure 11 would be that
            the computer program is consistent in its results, for Figure 12 the
            program is inconsistent.
          </p>
          <p className="blurbParagraph ">
            The content as another medium is better understood by examining the
            different components that form this medium - this process is called
            Intermediality. It is also the understanding that there is a complex
            interplay to understanding the message of a Net art since there are
            four modalities used in meaning-making.
          </p>
          <article className="imageContainer">
            <figure>
              <img
                className="blogImg"
                src={require(`../../Images/Essay/selfie.png`)}
                alt="selfie"
              />
              <figcaption className="blogImgCaption">
                Figure 11 Prompt 3 image
              </figcaption>
            </figure>
            <figure>
              <img
                className="blogImg"
                src={require(`../../Images/Essay/rock.png`)}
                alt="selfie"
              />
              <figcaption className="blogImgCaption">
                Figure 12 Prompt 4 image
              </figcaption>
            </figure>
          </article>
          <h2 className="secondHeading">What is material modality?</h2>
          <p className="blurbParagraph ">
            This modality looks at the physical aspects that the user/ audience
            has to engage with to access the work (Bruhn and Schirrmacher, 2022,
            p. 97). Since the content is online and accessed on the Internet,
            specifically on a computer, it can be said that the material
            modalities for “it's doing it” are the surface of the screen and the
            mouse as the interactive tool. This choice for the Net Art is an
            advantage as it increases accessibility, users with devices can gain
            access anywhere.
          </p>
          <h2 className="secondHeading">What is the Sensorial modality?</h2>
          <p className="blurbParagraph ">
            Interactions are sensory experiences, to interact with the screen
            the visual sense is engaged and to use the mouse the tactile sense
            of touch is engaged (Bruhn and Schirrmacher, 2022, p. 21). It is in
            this modality that we can determine how Net art as a whole, has
            changed the “nature” of art. As stated above, art went from distant
            paintings and sculptures in museums that people had to travel to
            see, now it is engaged on a personal and deeper level. Net Art
            allows for the exploration of art in ways that weren&apos;t
            available in traditional art. It is very interesting that the user
            can open a link to “it's doing it” and be able to say that they are
            interacting with the original.
          </p>
          <h2 className="secondHeading">
            What is the Spatiotemporal modality?
          </h2>
          <p className="blurbParagraph ">
            Spatiotemporal refers to “space and time” (Bruhn and Schirrmacher,
            2022, p. 21), this helps situate the user as it helps identify
            important aspects. For example, in “it's doing it” the web page
            starts with an introduction then has all nine prompts with images
            for the chosen day and the page ends at the footer - this shows the
            user the beginning, middle and end of the work. This becomes more
            complex when the drop-down menu is considered since it then results,
            in the beginning, middle and end, times 45. The images in this Net
            art are hyperlinks, expanding the work's Spatial aspect. The
            Temporal aspect is the arrangement of the dates. These aspects are
            only made possible by semiotics as they help encode the meaning of
            space and time in this Net Art.
          </p>
          <h2 className="secondHeading">What is the Semiotic modality?</h2>
          <p className="blurbParagraph ">
            The Net Art is made up of text and images, these media are signs
            that evoke certain responses from users based on convenience (Bruhn
            and Schirrmacher, 2022, p. 22). For example, when the user hovers
            their mouse over an image the box gets an orange glow outline, this
            indicates that this aspect is interactive, which prompts the user to
            click the image. This takes them to the instructions page that uses
            text, which is much more than simple commands, “the prompts are more
            poetic”(Voon, 2015). An example is the “DailyDoughnut” with the
            words “the batter will be a bit grainy, but that's just all the
            yummy vanilla bits”, this also shows relevance for the world today,
            since anyone can access AI but not everyone has a technical
            background, thus the prompts sent in will vary in their directness
            and content. This helps designers understand how the computer
            interprets these non-technical word choices.
          </p>
          <h2 className="secondHeading">Conclusion</h2>
          <p className="blurbParagraph  ">
            After analyzing the Internet as a medium it is determined that this
            was an effective choice for displaying and creating the Net Art,
            “it's doing it”. The Intermedial analysis helped identify how each
            element of Net Art helped construct the meaning. The method of
            making “it's doing it”, through the use of code displayed its value
            to contemporary society as it explored ways of understanding and
            unpacking, the way algorithms interpret poetic or conversational
            language. This proved that Net Art is relevant to designers as it
            visually displayed results, which allowed them to see what the
            algorithm had interpreted. This helps designers create a convention
            of checking their code, by displaying it visually, to prevent error
            in misrepresentation.
          </p>
          <h2 className="secondHeading">Bibliography:</h2>
          <ul className="referrences">
            <li className="p-author">
              Bruhn, J. and Schirrmacher, B. (eds) (2022) Intermedial Studies:
              An Introduction to Meaning Across Media. Taylor & Francis.
              Available at: https://doi.org/10.4324/9781003174288 (Accessed: 25
              April 2024).
            </li>
            <li className="p-author">
              Carrier, D. (2020) The Work of Art in the Age of the Internet,
              Hyperallergic. Available at:
              http://hyperallergic.com/563938/the-work-of-art-in-the-age-of-the-Internet/
              (Accessed: 23 April 2024).
            </li>
            <li className="p-author">
              Chatel, M. (2019a) ‘Net Art, Post-Internet Art, New Aesthetics:
              The Fundamentals of Art on the Internet&apos;, DANAE.IO, 2
              December. Available at:
              https://medium.com/danae/net-art-post-Internet-art-new-aesthetics-the-fundamentals-of-art-on-the-Internet-55dcbd9d6a5
              (Accessed: 23 April 2024).
            </li>
            <li className="p-author">
              Chatel, M. (2019b) ‘What is Digital Art? Definition and Scope of
              the New Media&apos;, DANAE.IO, 2 December. Available at:
              https://medium.com/danae/what-is-digital-art-definition-and-scope-of-the-new-media-f645058cfd78
              (Accessed: 23 April 2024).
            </li>
            <li className="p-author">
              David, M.S. and Mariswamy, Dr.H.K. (2014) ‘Internet as a Medium of
              Communication in Modern Society&apos;, Communication Today, 31
              March. Available at:
              https://communicationtoday.net/2014/03/31/Internet-as-a-medium-of-communication-in-modern-society/
              (Accessed: 25 April 2024).
            </li>
            <li className="p-author">
              Durham, M.G. and Kellner, D. (eds) (2006) Media and cultural
              studies: keyworks. Rev. ed. Malden, MA: Blackwell (Keyworks in
              cultural studies, 2).
            </li>
            <li className="p-author">
              Hyperallergic (2015) Best of 2015: Our Top 10 Works of Internet
              Art, Hyperallergic. Available at:
              http://hyperallergic.com/263538/best-of-2015-our-top-10-works-of-Internet-art/
              (Accessed: 24 April 2024).
            </li>
            <li className="p-author">
              It&apos;s doing it! (2015-2016). Available at:
              https://www.itsdoing.it/#date=01_24_2016 (Accessed: 25 April
              2024).
            </li>
            <li className="p-author">
              Mailloux, S. (1983) ‘Convention and Context&apos;, New Literary
              History, 14(2), p. 399. Available at:
              https://doi.org/10.2307/468693 .
            </li>
            <li className="p-author">
              McLuhan, M. (2006) ‘Chapter - 8- The Medium is the Message&apos;,
              in M.G. Durham and D. Kellner (eds) Media and cultural studies:
              keyworks. Rev. ed. Malden, MA: Blackwell (Keyworks in cultural
              studies, 2).
            </li>
            <li className="p-author">
              Osei-Hwere, E. and Osei-Hwere, P. (2023) ‘The Internet and Digital
              Media&apos;. Available at:
              https://oer.pressbooks.pub/mediacommunication/chapter/the-Internet-and-digital-media/
              (Accessed: 24 April 2024).
            </li>
            <li className="p-author">
              O&apos;Sullivan, J. and Grigar, D. (2019) ‘The Origins of
              Electronic Literature as Net/Web Art&apos;, in Brügger, N. and
              Milligan, I., The SAGE Handbook of Web History. 1 Oliver&apos;s
              Yard, 55 City Road London EC1Y 1SP: SAGE Publications Ltd, pp.
              428-440. Available at: https://doi.org/10.4135/9781526470546.n29 .
            </li>
            <li className="p-author">
              O&apos;Toole, F. (2019) The New Museum Hits “Save” on Net Art,
              Hyperallergic. Available at:
              http://hyperallergic.com/485466/the-new-museum-hits-save-on-net-art/
              (Accessed: 24 April 2024).
            </li>
            <li className="p-author">
              Ricci, B. (2020) ‘Net Art and How The Internet Has Created A New
              Medium&apos;, Artland Magazine, 17 July. Available at:
              https://magazine.artland.com/agents-of-change-Internet-net-art-how-the-world-wide-web-has-affected-the-way-we-make-art/
              (Accessed: 24 April 2024).
            </li>
            <li className="p-author">
              Stallabrass, J. (2003) ‘The Aesthetics of Net.art&apos;, Qui
              Parle, 14(1), pp. 49-72. Available at:
              https://doi.org/10.1215/quiparle.14.1.49 .
            </li>
          </ul>
        </article>
      </section>
      <section className="blogPost ">
        <article className="blogContent">
          <summary>
            <h3 className="thirdHeading">Mobile first vs Web First Design</h3>
            <p className="blogDate">10 May 2024</p>
          </summary>

          <p className="blurbParagraph ">
            I did some research to understand the differences between
            mobile-first vs desktop-first design. Mobile first prioritises the
            mobile experience- since it has a smaller screen size with touch
            interactions. There are benefits to their mobile-first approach,
            such as “reducing the fluff” (HV Digital, n.d), which means that
            only essential content is displayed. Another benefit is that it
            optimises the performance since the website loads faster and more
            efficiently. Desktop first designs allow for more detailed designs
            as there is more space and designers can be more creative.According
            to Hv Digital, a determining factor is deciding what fits with the
            goals of the websites for example e-commerce sites are better on
            mobile first designs approach, but web apps are better as desktop
            first designs.
          </p>

          <p className="p-author ">
            Reference: HV Digital. (n.d.). Mobile-First vs. Desktop-First:
            Finding the Right Approach. [online] Available at:
            https://www.hvdig.co.uk/web-agency/mobile-first-vs-desktop-first#what-is-mobile-first-design
            [Accessed 10 May 2024].
          </p>
        </article>
      </section>
      <section className="blogPost ">
        <article className="blogContent">
          <summary>
            <h3 className="thirdHeading">Acceptable file size for video </h3>
            <p className="blogDate">21 May 2021</p>
          </summary>

          <p className="blurbParagraph ">
            I have added a video on the home page that is 11 seconds long and
            plays on a loop in the background. I found that large images and
            videos have a great impact on user experience since they affect the
            page loading time. Here is an example scenario: A user clicks on my
            webpage that has high-quality images and videos, the user waits 1-2
            seconds and if nothing loads they move on to the next web app. Thus
            it is imporant that I do research on what file size is acceptable so
            that it does not negatively impact a user&apos;s experience. Through
            my research, I found that, for shorter videos like the one on my
            homepage, the acceptable range is 2mb -2,5 mb. If my website was
            targeted mostly towards mobile users I would be inclined to have
            video file sizes under 2mb. But the general rule is to find the
            sweet spot between video quality and file sizes, and it is important
            to test the webpage on different devices and possibly different
            internet speeds to get an idea of what the user will expereince. The
            video on the homepage of this website is 2.5 MB which is in line
            with the research that i have done. I originally had a file size of
            8.5 MB but I noticed that it took a few seconds longer to load when
            the webpage was opened. Thus I found a way to lower the file size
            without much difference in the video quality.
          </p>

          <p className="p-author ">
            References: web.dev. (n.d.). Web Performance Made Easy - Google I/O
            2018 edition | Articles. [online] Available at:
            https://web.dev/articles/web-performance-made-easy.
          </p>
        </article>
      </section>
    </>
  );
};

export default Theory;
