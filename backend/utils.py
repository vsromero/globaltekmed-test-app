from pymongo import MongoClient
import ssl

def get_db_handle():
  client = MongoClient('mongodb+srv://viccsr1:5CbNIQSsLPyvuiRS@cluster0.87pjexr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  db_handle = client['db_name']
  return db_handle, client