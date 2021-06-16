# The Project

**Web Currency Converter** is a small but fun web application to develop. As a user, you can convert currencies with a real-time rate updated by the ExchangeRate-API (https://app.exchangerate-api.com/).

All conversions can be done both ways, converting **from base** currency **to target** currency as well as **in reverse way**. Also, conversions are done automatically when the user selects the two criterias needed to make a conversion.

**(1)** Amount for base or target
**(2)** Both base and target currencies

![IMAGE](https://github.com/Rafael-Fontes-Baptista/test-readme/blob/master/images/app-screen-view.png)

# The Process

### **Step 1: Research and Benchmark** 🔍

Before I even started designing the first scopes, I did a quick internet search to see how most currency exchange websites work. From the survey, **Transferwise** (https://wise.com/) was the one I liked the most, and it became the model fot the app's **conversion feature**.

**Step 2: Drafts and Wireframe**

After some drawing, I created the **Wireframe** and the **React Component Tree** using the **Balsamiq Cloud** tool (https://balsamiq.cloud/). This tool is super easy to use and helped me organize the main ideas for the project.

![IMAGE](https://github.com/Rafael-Fontes-Baptista/test-readme/blob/master/images/wireframe-and-component-tree.png)

**Step 3: Development**

In the development phase, I choose to make the API request to fetch a updated list of currencies (with acronym and rate) on the parent component **(ConverterBox)**. In this way, the logic operations are done in the **ConverterForm** component, where the data is selected, calculated and returned to the user.

To finish the app development phase, I took one last and important step.

**Step 4: Feedback and Improvements**

Once the UI and the converter feature was built, I asked a few people to **use the app**. I got a few interesting feedbacks to improve the user experience. Lasty, I went through all the code to find **points of improvement**. And after refactoring it, the code looked much cleaner and more readable.

Even so, there is a lot to improve and learn.
Any suggestion is always welcome.

# The Result

Developing the **Web Currency Converter** app was a rich experience for me as junior developer, I could increase my skills in programming and have fun too. I hope you also like it and check out the **deployed version** at the link below:
