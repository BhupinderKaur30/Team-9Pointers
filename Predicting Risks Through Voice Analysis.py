#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# Load dataset
data = pd.read_csv("virtual_voice_scores.csv")  # Replace "virtual_voice_data.csv" with your dataset file path

# Separate features (X) and target variable (y)
X = data[['Pitch', 'Jitter', 'Rate_of_Articulation', 'Spectral_Flux', 'Energy', 'Breathiness', 'Roughness', 'Hoarseness']]
y = data['Virtual_Voice_Score']

# Split the dataset into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Predict on the test set
y_pred = model.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
print("Mean Squared Error:", mse)

# Ask for new input
new_input = []
print("Enter the values for the following parameters:")
for param in X.columns:
    val = float(input(f"{param}: "))
    new_input.append(val)

# Make prediction for new input
predicted_score = model.predict([new_input])
print("Predicted Virtual Voice Score:", predicted_score[0])


# In[2]:


# Make prediction for new input
predicted_score = model.predict([new_input])[0]
print("Predicted Virtual Voice Score:", predicted_score)

# Check conditions and print diagnosis
if predicted_score >= 121:
    print("The person is fit.")
elif 55.59 <= predicted_score <= 71.94:
    print("The person is suffering from Parkinson's Disease.")
elif 71.94 < predicted_score <= 104.64:
    print("The person is suffering from Respiratory Disorders.")
elif 104.64 < predicted_score <= 121:
    print("The person is suffering from depression and anxiety.")


# In[3]:


# Ask for new input
new_input = []
print("Enter the values for the following parameters:")
for param in X.columns:
    val = float(input(f"{param}: "))
    new_input.append(val)

# Make prediction for new input
predicted_score = model.predict([new_input])
print("Predicted Virtual Voice Score:", predicted_score[0])


# In[4]:


# Make prediction for new input
predicted_score = model.predict([new_input])[0]
print("Predicted Virtual Voice Score:", predicted_score)

# Check conditions and print diagnosis
if predicted_score >= 121:
    print("The person is fit.")
elif 55.59 <= predicted_score <= 71.94:
    print("The person is suffering from Parkinson's Disease.")
elif 71.94 < predicted_score <= 104.64:
    print("The person is suffering from Respiratory Disorders.")
elif 104.64 < predicted_score <= 121:
    print("The person is suffering from depression and anxiety.")


# In[ ]:




