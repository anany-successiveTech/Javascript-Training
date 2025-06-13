 for (let row = 0; row < count; row++) {

        let line = '';
        
        for (let space = 0; space < count - row - 1; space++) {
            line += ' ';
        }
        
        for (let star = 0; star < 2 * row + 1; star++) {
            line += '*';
        }
        console.log(line);
    }