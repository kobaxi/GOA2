        let count = 0;
        const counter = document.getElementById("counter");

        function updateCounter() {
            counter.textContent = count;
        }

        function increase1() {
            count++;
            updateCounter();
        }

        function decrease1() {
            count--;
            updateCounter();
        }

        function increase10() {
            count += 10;
            updateCounter();
        }

        function decrease10() {
            count -= 10;
            updateCounter();
        }

        function resetCounter() {
            count = 0;
            updateCounter();
        }