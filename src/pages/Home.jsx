import React from "react";
import { Link } from "react-router-dom";

const Home = ({apibase}) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white pt-20">
      {/* Hero Section */}
      <section className="text-center px-6 py-20 md:py-28 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">हाम्रो पुस्तकालयमा तपाईलाई स्वागत छ । 📚</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          विश्वमा पुस्तकको इतिहास सगैं पुस्तकालयको इतिहास पनि शुरु भएको पाईन्छ। इ. पू. ५५०० देखि नै पुस्तकालयको प्रारम्भ भएको मानिन्छ। यस समयमा सुमेरियन र मेसोपोटामियनहरूले गिला माटाका खबटाहरूमा आफ्ना विचारहरू चित्रात्मक लिपिमा लेखी घाममा सुकाएर राख्ने गर्थे।पछि उनीहरूले क्युनिफर्म लिपि विकास गरेर त्यही लिपिमा माटाका खबटाहरूमा लेखेर सङ्ग्रह गर्न थाले। खवटे पुस्तकका तिनै संग्रहहरू नै आजका आधुनिक पुस्तकालयका प्राचिन रुप हुन्।
        </p>
        <Link
          to="/book-list"
          className="bg-white text-blue-700 hover:bg-gray-200 font-semibold py-3 px-6 rounded-md transition duration-300"
        >
          किताब खोज्नुहोस ।
        </Link>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">पुस्तकालयको बारेमा</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
         पुस्तकालय लेखी,छापी,कोरी,खिचि,वा यस्तै अरू विभिन्न माध्यमद्वारा तयार पारिएको पुस्तक, पुस्तिका,अखवार,पत्रिका,नक्सा,चार्ट,फिल्म आदि ज्ञान सामग्री सु-व्यबस्थित रूपमा उपलब्ध गराई जीवनभर नियमित शिक्षा प्रदान गर्ने शैक्षिक केन्द्र हो। पुस्तकालय संस्कृत भाषाको पुस्तक र आलय दुई शब्द मिलेर बनेको हो,यसको अर्थ पुस्तकहरू राखिएको घर भन्ने हुन्छ ।
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
          नेपालको सबैभन्दा ठूलो व्यक्तिगत पुस्तकालय मदन पुरस्कार पुस्तकालय हो । यसमा झन्डै ४० हजार नेपाली पुस्तकहरू रहेको कुरा डा. अशोक थापाले बताएका छन् । थापा त्यस पुस्तकालयमा ६ वर्षसम्म कार्यरत थिए । नेपाली भाषासाहित्यको सबैभन्दा ठूलो सङ्ग्रालय रहेको त्यो पुस्तकालय मदन पुरस्कार गुठीले सञ्चालनमा ल्याएको हो । त्यस पुस्तकालयलाई विद्युतीय पुस्तकालयमा रूपान्तरण गर्नका लागि अहिले पनि काम भइराखेको छ ।
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-100 dark:bg-blue-900 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900 dark:text-white">
            पुस्तक साझेदारी गर्नुहोस ।
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            तपाईसँग भएको पुस्तकहरु साझेदारी गर्नसक्नुहुनेछ ।
          </p>
          <Link
            to="/add-book"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
          >
            किताब थप्नुहोस 
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
