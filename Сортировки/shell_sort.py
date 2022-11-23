def shell_sort(data):
    step = len(data) // 2

    while step > 0:
        for i in range(0, len(data)):
            current = data[i]
            j = i - step
            while j >= 0 and current < data[j]:
                data[j + step] = data[j]
                j -= step

            data[j + step] = current

        step = step // 2

    return data
