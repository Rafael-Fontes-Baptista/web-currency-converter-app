# The Project

**Web Currency Converter** is a small and nice web application to develop. As a user, you can convert currencies with a real-time rate updated by the ExchangeRate-API (https://app.exchangerate-api.com/).

All conversions can be done both ways, converting **from base** currency **to target** currency as well as **in reverse way**. Also, conversions are done automatically when the user selects the two criterias needed to make a conversion.

**(1)** Amount for base or target
**(2)** Both base and target currencies

![IMAGE](https://github.com/Rafael-Fontes-Baptista/web-currency-converter-app/blob/master/public/app-view-screen.png?raw=true)

# The Process

#### 🔍 **Step 1: Research and Benchmark** 

Before I even started designing the first scopes, I did a quick internet search to see how most currency exchange websites work. From the survey, **Transferwise** (https://wise.com/) was the one I liked the most, and it became the model for the app's **conversion feature**.

#### 📝 **Step 2: Drafts and Wireframe**

After some drawing, I created the **Wireframe** and the **React Component Tree** using the **Balsamiq Cloud** tool (https://balsamiq.cloud/). This tool is super easy to use and helped me organize the main ideas for the project.

![IMAGE](https://github.com/Rafael-Fontes-Baptista/web-currency-converter-app/blob/master/public/wireframe-and-component-tree.png?raw=true)

#### 👨🏻‍💻 **Step 3: Development**

In the development phase, I choose to make the API request to fetch a updated list of currencies (with acronym and rate) on the parent component **(ConverterBox)**. In this way, the logic operations are done in the **ConverterForm** component, where the data is selected, calculated and returned to the user.

To finish the app development phase, I took one last and important step.

#### ✅ **Step 4: Feedback and Improvements**

Once the UI and the converter feature were built, I asked a few people to **use the app**. I got a few interesting feedbacks to improve the user experience. Lasty, I went through all the code to find **points of improvement**. And after refactoring it, the code looked much cleaner and more readable.

Even so, there is a lot to improve and learn.
Any suggestion is always welcomed.

# The Result

Developing the **Web Currency Converter** app was a rich experience for me as a junior developer, I could increase my skills and have some fun too. I hope you like it and check out the **deployed version** at the link below:

#### APP ACCESS: https://web-currency-converter.netlify.app/
