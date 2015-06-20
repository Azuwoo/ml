#!/usr/bin/env python
# -*- coding:utf-8 -*-

from pymongo import Connection
import sys

def toFloat(n):         # 10加算して返すだけの関数plus
	
	return float(n)

	#コネクション作成
con = Connection('localhost', 27017)

#コネクションからtestデータベースを取得
db = con.ml

#testデータベースからfooコレクションを取得
col = db.tank

label = []

#label
for data in col.find():
	label.append(data['answer']);

label = list(set(label))

rs = []

#label
for ans in label:
	print ans.encode('utf-8') + ' ' + str(col.find({ 'answer' : ans}).count())
