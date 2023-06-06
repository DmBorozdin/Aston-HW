function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.call(obj);
logger.apply(obj);
const loggerWithContext = logger.bind(obj);
loggerWithContext();

// Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()
const bindContext = (context, fn) => (...args) => fn.call(context, ...args);
const loggerWithNewContext = bindContext(obj, logger);
loggerWithNewContext();