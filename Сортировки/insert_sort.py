def insert_sort(data):
    for i in range(1, len(data)):
        current = data[i]
        j = i - 1
        while j >= 0 and current < data[j]:
            data[j+1] = data[j]
            j -= 1

        data[j+1] = current
    return data
