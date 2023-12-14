# Credit-Card-Default-Prediction

## Table of Contents
1. [Proposal](#proposal)
   1. [Project Scope](#project-scope)
   2. [Domain](#Domain)
   3. [Literature Review](#Literature-Review)
   4. [Data Sources](#Data-Sources)
   5. [Domain-specific Challenges](#Domain-specific-Challenges)
2. [Pipeline](#pipeline)
3. [Deliverable 2](Deliverable-2.pdf)
4. [Deliverable 3](Deliverable-3.pdf)
5. [Deliverable 4](Deliverable-4.pdf)



## Proposal

### Project Scope
The goal of this project is to make a user-interactive application that will allow a user to input information regarding their credit usage and payments and predict if they are likely to default on their payments in the future.

### Domain  
Financial Risk assessment

### Literature Review
SMOTE technique\
https://ieeexplore.ieee.org/abstract/document/8717766 \
This paper covers Credit card fraud refers to the physical loss of a credit card or loss of sensitive credit card information. Many machine-learning algorithms can be used for detection. This research shows several algorithms that can be used for classifying transactions as fraud or genuine ones. Credit Card Fraud Detection dataset was used in the research. Because the dataset was highly imbalanced, the SMOTE technique was used for oversampling. Further, feature selection was performed and the dataset was split into two parts, training data and test data. The algorithms used in the experiment were Logistic Regression, Random Forest, Naive Bayes, and Multilayer Perceptron. Results show that each algorithm can be used for credit card fraud detection with high accuracy. The proposed model can be used for the detection of other irregularities.

### Data Sources
The primary data source for this project can be found here: \
http://archive.ics.uci.edu/dataset/350/default+of+credit+card+clients \
This data set consists of 30,000 entries each of which has 24 features.

### Domain-specific Challenges
In a real-world scenario models regarding Banking and Finance have specific challenges due to strict regulations put in place by governments. Primarily these regulations are in regards to building models that do not have unfair biases towards any groups. Due to the nature of this project however and the model not being used in a production environment there are not any specific challenges that need to be addressed.


## Pipeline
![Final Project AWS Pipeline](https://github.com/Swaroop2912/Credit-Card-Default-Prediction/assets/59443423/2d3aafbe-d2e3-4163-8555-e5e5fb89ac6c)
