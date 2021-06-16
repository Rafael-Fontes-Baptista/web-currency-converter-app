# The Project

**Web Currency Converter** is a small but fun web application to develop. As a user, you can convert currencies with a real-time rate updated by the Exchange Rates API (https://exchangeratesapi.io/).

All conversions can be done both ways, converting **from base** currency **to target** currency as well as **in reverse way**. Also, conversions are done automatically when the user selects the two criterias needed to make a conversion.

**(1)** Amount for base or target
**(2)** Both base and target currencies

![IMAGE](https://github.com/Rafael-Fontes-Baptista/test-readme/blob/master/images/app-screen-view.png)

# The Process

### **Step 1: Research and Benchmark** 🔍

Before I even started designing the first scopes, I did a quick internet search to see how most currency exchange websites work. From the survey, **Transferwise** (https://wise.com/) was the one I liked the most, and it became the model fot the app's **conversion feature**.

**Step 2: Drafts and Wireframe**

After some drawing, I created the **Wireframe** and the **React Component Tree** using the Balsamiq Cloud Tool (https://balsamiq.cloud/). This tool is super easy to use and help me a lot on organizing the ideas for the project.

![IMAGE](https://github.com/Rafael-Fontes-Baptista/test-readme/blob/master/images/wireframe-and-component-tree.png)

**Step 3: Development**

In the development phase, I choose to make the API request to fetch a updated list of currencies (wiht acronym and rate) on the parent component **(ConverterBox)**. So in this way, I separated the logical process to be done in the **ConverterForm** component, because here is where the data is selected, calculated and returned to the user.

To finish the app development phase, I took one last and important step.

**Step 4: Feedback and Improvements**

Once the UI and converter feature was built, I asked a few people to **test the app** (mostly family or friends). I got some feedback that helped me to improve the user experience. Lasty, I went through all my code to find **points of improvement**. And after refactoring it, the code looked much cleaner and more readable.

Even so, there is a lot to improve and learn.
Please, any suggestion is always welcome.

# The Result

Developing the Web Currency Converter app was a rich experience, I could learn new things in programming and have fun too. I hope you also like it and check out the **deployed version** at the link below:
