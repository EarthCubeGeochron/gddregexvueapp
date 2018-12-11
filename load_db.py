import psycopg2
import json

with open('db_connect.json') as f:
    data = json.load(f)

conn = psycopg2.connect(**data)
cur = conn.cursor()

with open('public/text_regex.json') as matchers:
    data = json.load(matchers)
