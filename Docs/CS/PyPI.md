
# ——[PyPI](https://pypi.org/)——


Resource

- [awesome-python-cn](https://github.com/jobbole/awesome-python-cn)
- [awesome-python](https://github.com/vinta/awesome-python)



# [NumPy](https://numpy.org/)
**Numerical Python**

## [ndarray（N-dimensional Array Object）](https://www.numpy.org.cn/reference/arrays/ndarray.html#%E6%9E%84%E9%80%A0%E6%95%B0%E7%BB%84)
**numpy.array(object, dtype = None, copy = True, order = None, subok = False, ndmin = 0)**

| 属性 | 描述 |
| --- | --- |
| [ndarray.flags](https://numpy.org/devdocs/reference/generated/numpy.ndarray.flags.html#numpy.ndarray.flags) | 有关数组内存布局的信息。 |
| [ndarray.shape](https://numpy.org/devdocs/reference/generated/numpy.ndarray.shape.html#numpy.ndarray.shape) | 数组维度的元组。 |
| [ndarray.strides](https://numpy.org/devdocs/reference/generated/numpy.ndarray.strides.html#numpy.ndarray.strides) | 遍历数组时每个维度中的字节元组。 |
| [ndarray.ndim](https://numpy.org/devdocs/reference/generated/numpy.ndarray.ndim.html#numpy.ndarray.ndim) | 数组维数。 |
| [ndarray.data](https://numpy.org/devdocs/reference/generated/numpy.ndarray.data.html#numpy.ndarray.data) | Python缓冲区对象指向数组的数据的开头。 |
| [ndarray.size](https://numpy.org/devdocs/reference/generated/numpy.ndarray.size.html#numpy.ndarray.size) | 数组中的元素数。 |
| [ndarray.itemsize](https://numpy.org/devdocs/reference/generated/numpy.ndarray.itemsize.html#numpy.ndarray.itemsize) | 一个数组元素的长度，以字节为单位 |
| [ndarray.nbytes](https://numpy.org/devdocs/reference/generated/numpy.ndarray.nbytes.html#numpy.ndarray.nbytes) | 数组元素消耗的总字节数。 |
| [ndarray.base](https://numpy.org/devdocs/reference/generated/numpy.ndarray.base.html#numpy.ndarray.base) | 如果内存来自其他对象，则为基础对象。 |
| [ndarray.dtype](https://numpy.org/devdocs/reference/generated/numpy.ndarray.dtype.html#numpy.ndarray.dtype) | 数组元素的数据类型。 |
|  |  |
| [ndarray.T](https://numpy.org/devdocs/reference/generated/numpy.ndarray.T.html#numpy.ndarray.T) | 转置数组。 |
| [ndarray.real](https://numpy.org/devdocs/reference/generated/numpy.ndarray.real.html#numpy.ndarray.real) | 数组的真实部分。 |
| [ndarray.imag](https://numpy.org/devdocs/reference/generated/numpy.ndarray.imag.html#numpy.ndarray.imag) | 数组的虚部。 |
| [ndarray.flat](https://numpy.org/devdocs/reference/generated/numpy.ndarray.flat.html#numpy.ndarray.flat) | 数组上的一维迭代器。 |
| [ndarray.ctypes](https://numpy.org/devdocs/reference/generated/numpy.ndarray.ctypes.html#numpy.ndarray.ctypes) | 一个简化数组与ctypes模块交互的对象。 |

| 转换方法 | 描述 |
| --- | --- |
| [ndarray.item](https://numpy.org/devdocs/reference/generated/numpy.ndarray.item.html#numpy.ndarray.item)(*args) | 将数组元素复制到标准Python标量并返回它。 |
| [ndarray.tolist](https://numpy.org/devdocs/reference/generated/numpy.ndarray.tolist.html#numpy.ndarray.tolist)() | 将数组作为a.ndim-levels深层嵌套的Python标量列表返回。 |
| [ndarray.itemset](https://numpy.org/devdocs/reference/generated/numpy.ndarray.itemset.html#numpy.ndarray.itemset)(*args) | 将标量插入数组（如果可能，将标量转换为数组的dtype） |
| [ndarray.tostring](https://numpy.org/devdocs/reference/generated/numpy.ndarray.tostring.html#numpy.ndarray.tostring)([order]) | 构造包含数组中原始数据字节的Python字节。 |
| [ndarray.tobytes](https://numpy.org/devdocs/reference/generated/numpy.ndarray.tobytes.html#numpy.ndarray.tobytes)([order]) | 构造包含数组中原始数据字节的Python字节。 |
| [ndarray.tofile](https://numpy.org/devdocs/reference/generated/numpy.ndarray.tofile.html#numpy.ndarray.tofile)(fid[, sep, format]) | 将数组作为文本或二进制写入文件（默认）。 |
| [ndarray.dump](https://numpy.org/devdocs/reference/generated/numpy.ndarray.dump.html#numpy.ndarray.dump)(file) | 将数组的pickle转储到指定的文件。 |
| [ndarray.dumps](https://numpy.org/devdocs/reference/generated/numpy.ndarray.dumps.html#numpy.ndarray.dumps)() | 以字符串形式返回数组的pickle。 |
| [ndarray.astype](https://numpy.org/devdocs/reference/generated/numpy.ndarray.astype.html#numpy.ndarray.astype)(dtype[, order, casting, …]) | 数组的副本，强制转换为指定的类型。 |
| [ndarray.byteswap](https://numpy.org/devdocs/reference/generated/numpy.ndarray.byteswap.html#numpy.ndarray.byteswap)([inplace]) | 交换数组元素的字节 |
| [ndarray.copy](https://numpy.org/devdocs/reference/generated/numpy.ndarray.copy.html#numpy.ndarray.copy)([order]) | 返回数组的副本。 |
| [ndarray.view](https://numpy.org/devdocs/reference/generated/numpy.ndarray.view.html#numpy.ndarray.view)([dtype, type]) | 具有相同数据的数组的新视图。 |
| [ndarray.getfield](https://numpy.org/devdocs/reference/generated/numpy.ndarray.getfield.html#numpy.ndarray.getfield)(dtype[, offset]) | 返回给定数组的字段作为特定类型。 |
| [ndarray.setflags](https://numpy.org/devdocs/reference/generated/numpy.ndarray.setflags.html#numpy.ndarray.setflags)([write, align, uic]) | 分别设置数组标志WRITEABLE，ALIGNED，（WRITEBACKIFCOPY和UPDATEIFCOPY）。 |
| [ndarray.fill](https://numpy.org/devdocs/reference/generated/numpy.ndarray.fill.html#numpy.ndarray.fill)(value) | 使用标量值填充数组。 |
| 方法 | 描述 |
| [ndarray.reshape](https://numpy.org/devdocs/reference/generated/numpy.ndarray.reshape.html#numpy.ndarray.reshape)(shape[, order]) | 返回包含具有新形状的相同数据的数组。 |
| [ndarray.resize](https://numpy.org/devdocs/reference/generated/numpy.ndarray.resize.html#numpy.ndarray.resize)(new_shape[, refcheck]) | 就地更改数组的形状和大小。 |
| [ndarray.transpose](https://numpy.org/devdocs/reference/generated/numpy.ndarray.transpose.html#numpy.ndarray.transpose)(*axes) | 返回轴转置的数组视图。 |
| [ndarray.swapaxes](https://numpy.org/devdocs/reference/generated/numpy.ndarray.swapaxes.html#numpy.ndarray.swapaxes)(axis1, axis2) | 返回数组的视图，其中axis1和axis2互换。 |
| [ndarray.flatten](https://numpy.org/devdocs/reference/generated/numpy.ndarray.flatten.html#numpy.ndarray.flatten)([order]) | 将折叠的数组的副本返回到一个维度。 |
| [ndarray.ravel](https://numpy.org/devdocs/reference/generated/numpy.ndarray.ravel.html#numpy.ndarray.ravel)([order]) | 返回一个扁平的数组。 |
| [ndarray.squeeze](https://numpy.org/devdocs/reference/generated/numpy.ndarray.squeeze.html#numpy.ndarray.squeeze)([axis]) | 从形状除去单维输入一个。 |
| 方法 | 描述 |
| [ndarray.take](https://numpy.org/devdocs/reference/generated/numpy.ndarray.take.html#numpy.ndarray.take)(indices[, axis, out, mode]) | 返回由给定索引处的a元素组成的数组。 |
| [ndarray.put](https://numpy.org/devdocs/reference/generated/numpy.ndarray.put.html#numpy.ndarray.put)(indices, values[, mode]) | 为索引中的所有n设置。a.flat[n] = values[n] |
| [ndarray.repeat](https://numpy.org/devdocs/reference/generated/numpy.ndarray.repeat.html#numpy.ndarray.repeat)(repeats[, axis]) | 重复数组的元素。 |
| [ndarray.choose](https://numpy.org/devdocs/reference/generated/numpy.ndarray.choose.html#numpy.ndarray.choose)(choices[, out, mode]) | 使用索引数组从一组选项中构造新数组。 |
| [ndarray.sort](https://numpy.org/devdocs/reference/generated/numpy.ndarray.sort.html#numpy.ndarray.sort)([axis, kind, order]) | 对数组进行就地排序。 |
| [ndarray.argsort](https://numpy.org/devdocs/reference/generated/numpy.ndarray.argsort.html#numpy.ndarray.argsort)([axis, kind, order]) | 返回将对此数组进行排序的索引。 |
| [ndarray.partition](https://numpy.org/devdocs/reference/generated/numpy.ndarray.partition.html#numpy.ndarray.partition)(kth[, axis, kind, order]) | 重新排列数组中的元素，使得第k个位置的元素值位于排序数组中的位置。 |
| [ndarray.argpartition](https://numpy.org/devdocs/reference/generated/numpy.ndarray.argpartition.html#numpy.ndarray.argpartition)(kth[, axis, kind, order]) | 返回将对此数组进行分区的索引。 |
| [ndarray.searchsorted](https://numpy.org/devdocs/reference/generated/numpy.ndarray.searchsorted.html#numpy.ndarray.searchsorted)(v[, side, sorter]) | 查找应在其中插入v的元素以维护顺序的索引。 |
| [ndarray.nonzero](https://numpy.org/devdocs/reference/generated/numpy.ndarray.nonzero.html#numpy.ndarray.nonzero)() | 返回非零元素的索引。 |
| [ndarray.compress](https://numpy.org/devdocs/reference/generated/numpy.ndarray.compress.html#numpy.ndarray.compress)(condition[, axis, out]) | 沿给定轴返回此数组的选定切片。 |
| [ndarray.diagonal](https://numpy.org/devdocs/reference/generated/numpy.ndarray.diagonal.html#numpy.ndarray.diagonal)([offset, axis1, axis2]) | 返回指定的对角线。 |

| 方法 | 描述 |
| --- | --- |
| [ndarray.max](https://numpy.org/devdocs/reference/generated/numpy.ndarray.max.html#numpy.ndarray.max)([axis，out，keepdims，initial，...]） | 沿给定轴返回最大值。 |
| [ndarray.argmax](https://numpy.org/devdocs/reference/generated/numpy.ndarray.argmax.html#numpy.ndarray.argmax)([axis, out]) | 返回给定轴上的最大值的索引。 |
| [ndarray.min](https://numpy.org/devdocs/reference/generated/numpy.ndarray.min.html#numpy.ndarray.min)([axis，out，keepdims，initial，...]) | 沿给定轴返回最小值。 |
| [ndarray.argmin](https://numpy.org/devdocs/reference/generated/numpy.ndarray.argmin.html#numpy.ndarray.argmin)([axis, out]) | 返回最小值的索引沿给定轴线一个。 |
| [ndarray.ptp](https://numpy.org/devdocs/reference/generated/numpy.ndarray.ptp.html#numpy.ndarray.ptp)([axis, out, keepdims]) | 沿给定轴的峰峰值（最大值 - 最小值）。 |
| [ndarray.clip](https://numpy.org/devdocs/reference/generated/numpy.ndarray.clip.html#numpy.ndarray.clip)([min，max，out]) | 返回值限制为的数组。[min, max] |
| [ndarray.conj](https://numpy.org/devdocs/reference/generated/numpy.ndarray.conj.html#numpy.ndarray.conj)() | 复合共轭所有元素。 |
| [ndarray.round](https://numpy.org/devdocs/reference/generated/numpy.ndarray.round.html#numpy.ndarray.round)([decimals, out]) | 返回a，每个元素四舍五入到给定的小数位数。 |
| [ndarray.trace](https://numpy.org/devdocs/reference/generated/numpy.ndarray.trace.html#numpy.ndarray.trace)([offset, axis1, axis2, dtype, out]) | 返回数组对角线的总和。 |
| [ndarray.sum](https://numpy.org/devdocs/reference/generated/numpy.ndarray.sum.html#numpy.ndarray.sum)([axis, dtype, out, keepdims, …]) | 返回给定轴上的数组元素的总和。 |
| [ndarray.cumsum](https://numpy.org/devdocs/reference/generated/numpy.ndarray.cumsum.html#numpy.ndarray.cumsum)([axis, dtype, out]) | 返回给定轴上元素的累积和。 |
| [ndarray.mean](https://numpy.org/devdocs/reference/generated/numpy.ndarray.mean.html#numpy.ndarray.mean)([axis, dtype, out, keepdims]) | 返回给定轴上数组元素的平均值。 |
| [ndarray.var](https://numpy.org/devdocs/reference/generated/numpy.ndarray.var.html#numpy.ndarray.var)([axis, dtype, out, ddof, keepdims]) | 返回给定轴的数组元素的方差。 |
| [ndarray.std](https://numpy.org/devdocs/reference/generated/numpy.ndarray.std.html#numpy.ndarray.std)([axis, dtype, out, ddof, keepdims]) | 返回沿给定轴的数组元素的标准偏差。 |
| [ndarray.prod](https://numpy.org/devdocs/reference/generated/numpy.ndarray.prod.html#numpy.ndarray.prod)([axis, dtype, out, keepdims, …]) | 返回给定轴上的数组元素的乘积 |
| [ndarray.cumprod](https://numpy.org/devdocs/reference/generated/numpy.ndarray.cumprod.html#numpy.ndarray.cumprod)([axis, dtype, out]) | 返回沿给定轴的元素的累积乘积。 |
| [ndarray.all](https://numpy.org/devdocs/reference/generated/numpy.ndarray.all.html#numpy.ndarray.all)([axis, out, keepdims]) | 如果所有元素都计算为True，则返回True。 |
| [ndarray.any](https://numpy.org/devdocs/reference/generated/numpy.ndarray.any.html#numpy.ndarray.any)([axis, out, keepdims]) | 如果任何元素，则返回true 一个评估为True。 |

| 方法 | 描述 |
| --- | --- |
| [ndarray._lt_](https://numpy.org/devdocs/reference/generated/numpy.ndarray.__lt__.html#numpy.ndarray.__lt__)(self, value, /) | 返回 self<value. |
| [ndarray._le_](https://numpy.org/devdocs/reference/generated/numpy.ndarray.__le__.html#numpy.ndarray.__le__)(self, value, /) | 返回 self<=value. |
| [ndarray._gt_](https://numpy.org/devdocs/reference/generated/numpy.ndarray.__gt__.html#numpy.ndarray.__gt__)(self, value, /) | 返回 self>value. |
| [ndarray._ge_](https://numpy.org/devdocs/reference/generated/numpy.ndarray.__ge__.html#numpy.ndarray.__ge__)(self, value, /) | 返回 self>=value. |
| [ndarray._eq_](https://numpy.org/devdocs/reference/generated/numpy.ndarray.__eq__.html#numpy.ndarray.__eq__)(self, value, /) | 返回 self==value. |
| [ndarray._ne_](https://numpy.org/devdocs/reference/generated/numpy.ndarray.__ne__.html#numpy.ndarray.__ne__)(self, value, /) | 返回 self!=value. |

| 函数 | 描述 |
| --- | --- |
| np.zeros((3, 4)) | 创建 3×4 的元素全为 0 的数组 |
| np.ones((3, 4)) | 创建 3×4 的元素全为 1 的数组 |
| np.empty((2, 3)) | 创建 2×3 的空数组，空数据中的值并不为 0，而是未初始化的垃圾值 |
| np.zeros_like(ndarr) | 以 ndarr 相同维度创建元素全为  0数组 |
| np.ones_like(ndarr) | 以 ndarr 相同维度创建元素全为 1 数组 |
| np.empty_like(ndarr) | 以 ndarr 相同维度创建空数组 |
| np.eye(5) | 该函数用于创建一个 5×5 的矩阵，对角线为 1，其余为 0 |
| np.full((3,5), 10) | 创建 3×5 的元素全为 10 的数组，10 为指定值 |

```python
import numpy as np
arr = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])
print(arr[0:2, 1:4])  # [[2 3 4] [7 8 9]]
```

## ufunc（Universal Function Object）
通函数，一种ndarrays以逐元素方式操作的函数，支持数组广播，类型转换和其他一些标准功能。即一个函数的 “ 矢量化 ” 包装器，它接受固定数量的特定输入并产生固定数量的特定输出。

| 属性 | 描述 |
| --- | --- |
| [ufunc.nin](https://numpy.org/devdocs/reference/generated/numpy.ufunc.nin.html#numpy.ufunc.nin) | 输入数量。 |
| [ufunc.nout](https://numpy.org/devdocs/reference/generated/numpy.ufunc.nout.html#numpy.ufunc.nout) | 输出数量。 |
| [ufunc.nargs](https://numpy.org/devdocs/reference/generated/numpy.ufunc.nargs.html#numpy.ufunc.nargs) | 参数的数量。 |
| [ufunc.ntypes](https://numpy.org/devdocs/reference/generated/numpy.ufunc.ntypes.html#numpy.ufunc.ntypes) | 类型数量。 |
| [ufunc.types](https://numpy.org/devdocs/reference/generated/numpy.ufunc.types.html#numpy.ufunc.types) | 返回包含input-> output类型的列表。 |
| [ufunc.identity](https://numpy.org/devdocs/reference/generated/numpy.ufunc.identity.html#numpy.ufunc.identity) | 身份价值。 |
| [ufunc.signature](https://numpy.org/devdocs/reference/generated/numpy.ufunc.signature.html#numpy.ufunc.signature) | 广义ufunc操作的核心元素的定义。 |

| 方法 | 描述 |
| --- | --- |
| [ufunc.reduce](https://numpy.org/devdocs/reference/generated/numpy.ufunc.reduce.html#numpy.ufunc.reduce)(a[, axis, dtype, out, …]) | 减少一个接一个的尺寸，由沿一个轴施加ufunc。 |
| [ufunc.accumulate](https://numpy.org/devdocs/reference/generated/numpy.ufunc.accumulate.html#numpy.ufunc.accumulate)(array[, axis, dtype, out]) | 累积将运算符应用于所有元素的结果。 |
| [ufunc.reduceat](https://numpy.org/devdocs/reference/generated/numpy.ufunc.reduceat.html#numpy.ufunc.reduceat)(a, indices[, axis, dtype, out]) | 在单个轴上使用指定切片执行（局部）缩减。 |
| [ufunc.outer](https://numpy.org/devdocs/reference/generated/numpy.ufunc.outer.html#numpy.ufunc.outer)(A, B, **kwargs) | 将ufunc op应用于所有对（a，b），其中a中的a和b中的b。 |
| [ufunc.at](https://numpy.org/devdocs/reference/generated/numpy.ufunc.at.html#numpy.ufunc.at)(a, indices[, b]) | 对'index'指定的元素在操作数'a'上执行无缓冲的就地操作。 |

**数学运算**

| 方法 | 描述 |
| --- | --- |
| [add](https://numpy.org/devdocs/reference/generated/numpy.add.html#numpy.add)(x1, x2, /[, out, where, cast, order, ...]) | 按元素添加参数。 |
| [subtract](https://numpy.org/devdocs/reference/generated/numpy.subtract.html#numpy.subtract)(x1, x2, /[, out, where, cast, ...]) | 从元素方面减去参数。 |
| [multiply](https://numpy.org/devdocs/reference/generated/numpy.multiply.html#numpy.multiply)(x1, x2, /[, out, where, cast, ...]) | 在元素方面乘以论证。 |
| [divide](https://numpy.org/devdocs/reference/generated/numpy.divide.html#numpy.divide)(x1, x2, /[, out, where, cast, ...]) | 以元素方式返回输入的真正除法。 |
| [logaddexp](https://numpy.org/devdocs/reference/generated/numpy.logaddexp.html#numpy.logaddexp)(x1, x2, /[, out, where, cast, ...]) | 输入的取幂之和的对数。 |
| [logaddexp2](https://numpy.org/devdocs/reference/generated/numpy.logaddexp2.html#numpy.logaddexp2)(x1, x2, /[, out, where, cast, ...]) | base-2中输入的取幂之和的对数。 |
| [true_divide](https://numpy.org/devdocs/reference/generated/numpy.true_divide.html#numpy.true_divide)(x1, x2, /[, out, where, ...]) | 以元素方式返回输入的真正除法。 |
| [floor_divide](https://numpy.org/devdocs/reference/generated/numpy.floor_divide.html#numpy.floor_divide)(x1, x2, /[, out, where, ...]) | 返回小于或等于输入除法的最大整数。 |
| [negative](https://numpy.org/devdocs/reference/generated/numpy.negative.html#numpy.negative)(x, /[, out, where, cast, order, ...]) | 数字否定, 元素方面。 |
| [positive](https://numpy.org/devdocs/reference/generated/numpy.positive.html#numpy.positive)(x, /[, out, where, cast, order, ...]) | 数字正面, 元素方面。 |
| [power](https://numpy.org/devdocs/reference/generated/numpy.power.html#numpy.power)(x1, x2, /[, out, where, cast, ...]) | 第一个数组元素从第二个数组提升到幂, 逐个元素。 |
| [remainder](https://numpy.org/devdocs/reference/generated/numpy.remainder.html#numpy.remainder)(x1, x2, /[, out, where, cast, ...]) | 返回除法元素的余数。 |
| [mod](https://numpy.org/devdocs/reference/generated/numpy.mod.html#numpy.mod)(x1, x2, /[, out, where, cast, order, ...]) | 返回除法元素的余数。 |
| [fmod](https://numpy.org/devdocs/reference/generated/numpy.fmod.html#numpy.fmod)(x1, x2, /[, out, where, cast, ...]) | 返回除法的元素余数。 |
| [divmod](https://numpy.org/devdocs/reference/generated/numpy.divmod.html#numpy.divmod)(x1, x2 [, out1, out2], /[[, out, ...]) | 同时返回逐元素的商和余数。 |
| [absolute](https://numpy.org/devdocs/reference/generated/numpy.absolute.html#numpy.absolute)(x, /[, out, where, cast, order, ...]) | 逐个元素地计算绝对值。 |
| [fabs](https://numpy.org/devdocs/reference/generated/numpy.fabs.html#numpy.fabs)(x, /[, out, where, cast, order, ...]) | 以元素方式计算绝对值。 |
| [rint](https://numpy.org/devdocs/reference/generated/numpy.rint.html#numpy.rint)(x, /[, out, where, cast, order, ...]) | 将数组的元素舍入为最接近的整数。 |
| [sign](https://numpy.org/devdocs/reference/generated/numpy.sign.html#numpy.sign)(x, /[, out, where, cast, order, ...]) | 返回数字符号的元素指示。 |
| [heaviside](https://numpy.org/devdocs/reference/generated/numpy.heaviside.html#numpy.heaviside)(x1, x2, /[, out, where, cast, ...]) | 计算Heaviside阶跃函数。 |
| [conj](https://numpy.org/devdocs/reference/generated/numpy.conj.html#numpy.conj)(x, /[, out, where, cast, order, ...]) | 以元素方式返回复共轭。 |
| [conjugate](https://numpy.org/devdocs/reference/generated/numpy.conjugate.html#numpy.conjugate)(x, /[, out, where, cast, ...]) | 以元素方式返回复共轭。 |
| [exp](https://numpy.org/devdocs/reference/generated/numpy.exp.html#numpy.exp)(x, /[, out, where, cast, order, ...]) | 计算输入数组中所有元素的指数。 |
| [exp2](https://numpy.org/devdocs/reference/generated/numpy.exp2.html#numpy.exp2)(x, /[, out, where, cast, order, ...]) | 计算输入数组中所有 p 的 2**p。 |
| [log](https://numpy.org/devdocs/reference/generated/numpy.log.html#numpy.log)(x, /[, out, where, cast, order, ...]) | 自然对数, 元素方面。 |
| [log2](https://numpy.org/devdocs/reference/generated/numpy.log2.html#numpy.log2)(x, /[, out, where, cast, order, ...]) | x的基数为2的对数。 |
| [log10](https://numpy.org/devdocs/reference/generated/numpy.log10.html#numpy.log10)(x, /[, out, where, cast, order, ...]) | 以元素方式返回输入数组的基数10对数。 |
| [expm1](https://numpy.org/devdocs/reference/generated/numpy.expm1.html#numpy.expm1)(x, /[, out, where, cast, order, ...]) | 计算数组中的所有元素。exp(x) - 1 |
| [log1p](https://numpy.org/devdocs/reference/generated/numpy.log1p.html#numpy.log1p)(x, /[, out, where, cast, order, ...]) | 返回一个加上输入数组的自然对数, 逐个元素。 |
| [sqrt](https://numpy.org/devdocs/reference/generated/numpy.sqrt.html#numpy.sqrt)(x, /[, out, where, cast, order, ...]) | 以元素方式返回数组的非负平方根。 |
| [square](https://numpy.org/devdocs/reference/generated/numpy.square.html#numpy.square)(x, /[, out, where, cast, order, ...]) | 返回输入的元素方块。 |
| [cbrt](https://numpy.org/devdocs/reference/generated/numpy.cbrt.html#numpy.cbrt)(x, /[, out, where, cast, order, ...]) | 以元素方式返回数组的立方根。 |
| [reciprocal](https://numpy.org/devdocs/reference/generated/numpy.reciprocal.html#numpy.reciprocal)(x, /[, out, where, cast, ...]) | 以元素方式返回参数的倒数。 |
| [gcd](https://numpy.org/devdocs/reference/generated/numpy.gcd.html#numpy.gcd)(x1, x2, /[, out, where, cast, order, ...]) | 返回 &#124; x1 &#124; 和的最大公约数 &#124; x2 &#124; 。 |
| [lcm](https://numpy.org/devdocs/reference/generated/numpy.lcm.html#numpy.lcm)(x1, x2, /[, out, where, cast, order, ...]) | 返回 &#124; x1 &#124; 和的最小公倍数 &#124; x2 &#124; 。 |

**三角函数**

| 方法 | 描述 |
| --- | --- |
| [sin](https://numpy.org/devdocs/reference/generated/numpy.sin.html#numpy.sin)(x, /[, out, where, cast, order, ...]) | 三角正弦, 元素方式。 |
| [cos](https://numpy.org/devdocs/reference/generated/numpy.cos.html#numpy.cos)(x, /[, out, where, cast, order, ...]) | 余弦元素。 |
| [tan](https://numpy.org/devdocs/reference/generated/numpy.tan.html#numpy.tan)(x, /[, out, where, cast, order, ...]) | 计算切线元素。 |
| [arcsin](https://numpy.org/devdocs/reference/generated/numpy.arcsin.html#numpy.arcsin)(x, /[, out, where, cast, order, ...]) | 反向正弦, 元素方式。 |
| [arccos](https://numpy.org/devdocs/reference/generated/numpy.arccos.html#numpy.arccos)(x, /[, out, where, cast, order, ...]) | 三角反余弦, 元素方式。 |
| [arctan](https://numpy.org/devdocs/reference/generated/numpy.arctan.html#numpy.arctan)(x, /[, out, where, cast, order, ...]) | 三角反正切, 逐元素。 |
| [arctan2](https://numpy.org/devdocs/reference/generated/numpy.arctan2.html#numpy.arctan2)(x1, x2, /[, out, where, cast, ...]) | x1/x2正确选择象限的逐元素反正切。 |
| [hypot](https://numpy.org/devdocs/reference/generated/numpy.hypot.html#numpy.hypot)(x1, x2, /[, out, where, cast, ...]) | 给定直角三角形的“腿”, 返回其斜边。 |
| [sinh](https://numpy.org/devdocs/reference/generated/numpy.sinh.html#numpy.sinh)(x, /[, out, where, cast, order, ...]) | 双曲正弦, 元素。 |
| [cosh](https://numpy.org/devdocs/reference/generated/numpy.cosh.html#numpy.cosh)(x, /[, out, where, cast, order, ...]) | 双曲余弦, 元素。 |
| [tanh](https://numpy.org/devdocs/reference/generated/numpy.tanh.html#numpy.tanh)(x, /[, out, where, cast, order, ...]) | 计算双曲正切元素。 |
| [arcsinh](https://numpy.org/devdocs/reference/generated/numpy.arcsinh.html#numpy.arcsinh)(x, /[, out, where, cast, order, ...]) | 逆双曲正弦元素。 |
| [arccosh](https://numpy.org/devdocs/reference/generated/numpy.arccosh.html#numpy.arccosh)(x, /[, out, where, cast, order, ...]) | 反双曲余弦, 元素。 |
| [arctanh](https://numpy.org/devdocs/reference/generated/numpy.arctanh.html#numpy.arctanh)(x, /[, out, where, cast, order, ...]) | 逆双曲正切元素。 |
| [deg2rad](https://numpy.org/devdocs/reference/generated/numpy.deg2rad.html#numpy.deg2rad)(x, /[, out, where, cast, order, ...]) | 将角度从度数转换为弧度。 |
| [rad2deg](https://numpy.org/devdocs/reference/generated/numpy.rad2deg.html#numpy.rad2deg)(x, /[, out, where, cast, order, ...]) | 将角度从弧度转换为度数。 |

**位运算函数**

| 方法 | 描述 |
| --- | --- |
| [bitwise_and](https://numpy.org/devdocs/reference/generated/numpy.bitwise_and.html#numpy.bitwise_and)(x1, x2, /[, out, where, ...]) | 逐个元素地计算两个数组的逐位AND。 |
| [bitwise_or](https://numpy.org/devdocs/reference/generated/numpy.bitwise_or.html#numpy.bitwise_or)(x1, x2, /[, out, where, cast, ...]) | 逐个元素地计算两个数组的逐位OR。 |
| [bitwise_xor](https://numpy.org/devdocs/reference/generated/numpy.bitwise_xor.html#numpy.bitwise_xor)(x1, x2, /[, out, where, ...]) | 逐个元素地计算两个数组的逐位XOR。 |
| [invert](https://numpy.org/devdocs/reference/generated/numpy.invert.html#numpy.invert)(x, /[, out, where, cast, order, ...]) | 计算逐位反转, 或逐位NOT, 逐元素计算。 |
| [left_shift](https://numpy.org/devdocs/reference/generated/numpy.left_shift.html#numpy.left_shift)(x1, x2, /[, out, where, cast, ...]) | 将整数位移到左侧。 |
| [right_shift](https://numpy.org/devdocs/reference/generated/numpy.right_shift.html#numpy.right_shift)(x1, x2, /[, out, where, ...]) | 将整数位移到右侧。 |

**比较函数**

| 方法 | 描述 |
| --- | --- |
| [greater](https://numpy.org/devdocs/reference/generated/numpy.greater.html#numpy.greater)(x1, x2, /[, out, where, cast, ...]) | 以元素方式返回(x1 > x2)的真值。 |
| [greater_equal](https://numpy.org/devdocs/reference/generated/numpy.greater_equal.html#numpy.greater_equal)(x1, x2, /[, out, where, ...]) | 以元素方式返回(x1 >= x2)的真值。 |
| [less](https://numpy.org/devdocs/reference/generated/numpy.less.html#numpy.less)(x1, x2, /[, out, where, cast, ...]) | 返回(x1 < x2)元素的真值。 |
| [less_equal](https://numpy.org/devdocs/reference/generated/numpy.less_equal.html#numpy.less_equal)(x1, x2, /[, out, where, cast, ...]) | 以元素方式返回(x1 =< x2)的真值。 |
| [not_equal](https://numpy.org/devdocs/reference/generated/numpy.not_equal.html#numpy.not_equal)(x1, x2, /[, out, where, cast, ...]) | 以元素方式返回(x1 != x2)。 |
| [equal](https://numpy.org/devdocs/reference/generated/numpy.equal.html#numpy.equal)(x1, x2, /[, out, where, cast, ...]) | 以元素方式返回(x1 == x2)。 |

| 方法 | 描述 |
| --- | --- |
| [logical_and](https://numpy.org/devdocs/reference/generated/numpy.logical_and.html#numpy.logical_and)(x1, x2, /[, out, where, ...]) | 计算x1和x2元素的真值。 |
| [logical_or](https://numpy.org/devdocs/reference/generated/numpy.logical_or.html#numpy.logical_or)(x1, x2, /[, out, where, cast, ...]) | 计算x1 OR x2元素的真值。 |
| [logical_xor](https://numpy.org/devdocs/reference/generated/numpy.logical_xor.html#numpy.logical_xor)(x1, x2, /[, out, where, ...]) | 以元素方式计算x1 XOR x2的真值。 |
| [logical_not](https://numpy.org/devdocs/reference/generated/numpy.logical_not.html#numpy.logical_not)(x, /[, out, where, cast, ...]) | 计算NOT x元素的真值。 |

| 方法 | 描述 |
| --- | --- |
| [maximum](https://numpy.org/devdocs/reference/generated/numpy.maximum.html#numpy.maximum)(x1, x2, /[, out, where, cast, ...]) | 元素最大的数组元素。 |
| [minimum](https://numpy.org/devdocs/reference/generated/numpy.minimum.html#numpy.minimum)(x1, x2, /[, out, where, cast, ...]) | 元素最小的数组元素。 |

| 方法 | 描述 |
| --- | --- |
| [fmax](https://numpy.org/devdocs/reference/generated/numpy.fmax.html#numpy.fmax)(x1, x2, /[, out, where, cast, ...]) | 元素最大的数组元素。 |
| [fmin](https://numpy.org/devdocs/reference/generated/numpy.fmin.html#numpy.fmin)(x1, x2, /[, out, where, cast, ...]) | 元素最小的数组元素。 |

**浮动函数**

| 方法 | 描述 |
| --- | --- |
| [isfinite](https://numpy.org/devdocs/reference/generated/numpy.isfinite.html#numpy.isfinite)(x, /[, out, where, cast, order, ...]) | 测试元素的有限性(不是无穷大或不是数字)。 |
| [isinf](https://numpy.org/devdocs/reference/generated/numpy.isinf.html#numpy.isinf)(x, /[, out, where, cast, order, ...]) | 正面或负面无穷大的元素测试。 |
| [isnan](https://numpy.org/devdocs/reference/generated/numpy.isnan.html#numpy.isnan)(x, /[, out, where, cast, order, ...]) | 测试NaN的元素, 并将结果作为布尔数组返回。 |
| [isnat](https://numpy.org/devdocs/reference/generated/numpy.isnat.html#numpy.isnat)(x, /[, out, where, cast, order, ...]) | 为NaT(不是时间)测试元素, 并将结果作为布尔数组返回。 |
| [fabs](https://numpy.org/devdocs/reference/generated/numpy.fabs.html#numpy.fabs)(x, /[, out, where, cast, order, ...]) | 以元素方式计算绝对值。 |
| [signbit](https://numpy.org/devdocs/reference/generated/numpy.signbit.html#numpy.signbit)(x, /[, out, where, cast, order, ...]) | 返回元素为True设置signbit(小于零)。 |
| [copysign](https://numpy.org/devdocs/reference/generated/numpy.copysign.html#numpy.copysign)(x1, x2, /[, out, where, cast, ...]) | 将元素x1的符号更改为x2的符号。 |
| [nextafter](https://numpy.org/devdocs/reference/generated/numpy.nextafter.html#numpy.nextafter)(x1, x2, /[, out, where, cast, ...]) | 将x1之后的下一个浮点值返回x2(元素方向)。 |
| [spacing](https://numpy.org/devdocs/reference/generated/numpy.spacing.html#numpy.spacing)(x, /[, out, where, cast, order, ...]) | 返回x与最近的相邻数字之间的距离。 |
| [modf](https://numpy.org/devdocs/reference/generated/numpy.modf.html#numpy.modf)(x [, out1, out2], /[[, out, where, ...]) | 以元素方式返回数组的小数和整数部分。 |
| [ldexp](https://numpy.org/devdocs/reference/generated/numpy.ldexp.html#numpy.ldexp)(x1, x2, /[, out, where, cast, ...]) | 以元素方式返回x1 * 2 ** x2。 |
| [frexp](https://numpy.org/devdocs/reference/generated/numpy.frexp.html#numpy.frexp)(x [, out1, out2], /[[, out, where, ...]) | 将x的元素分解为尾数和二进制指数。 |
| [fmod](https://numpy.org/devdocs/reference/generated/numpy.fmod.html#numpy.fmod)(x1, x2, /[, out, where, cast, ...]) | 返回除法的元素余数。 |
| [floor](https://numpy.org/devdocs/reference/generated/numpy.floor.html#numpy.floor)(x, /[, out, where, cast, order, ...]) | 以元素方式返回输入的底限。 |
| [ceil](https://numpy.org/devdocs/reference/generated/numpy.ceil.html#numpy.ceil)(x, /[, out, where, cast, order, ...]) | 以元素方式返回输入的上限。 |
| [trunc](https://numpy.org/devdocs/reference/generated/numpy.trunc.html#numpy.trunc)(x, /[, out, where, cast, order, ...]) | 以元素方式返回输入的截断值。 |


# [SciPy](https://www.scipy.org/)
Scientific Python

# [Matplotlib](https://www.matplotlib.org.cn/)

# [pandas](https://pandas.pydata.org/)
**数据结构**

- Series	带标签的一维同构数组
- DataFrame	带标签的，大小可变的，二维异构表格

导入数据

- pd.read_csv(filename)：从CSV文件导入数据
- pd.read_table(filename)：从限定分隔符的文本文件导入数据
- pd.read_excel(filename)：从Excel文件导入数据
- pd.read_sql(query, connection_object)：从SQL表/库导入数据
- pd.read_json(json_string)：从JSON格式的字符串导入数据
- pd.read_html(url)：解析URL、字符串或者HTML文件，抽取其中的tables表格
- pd.read_clipboard()：从你的粘贴板获取内容，并传给read_table()
- pd.DataFrame(dict)：从字典对象导入数据，Key是列名，Value是数据

导出数据

- df.to_csv(filename)：导出数据到CSV文件
- df.to_excel(filename)：导出数据到Excel文件
- df.to_sql(table_name, connection_object)：导出数据到SQL表
- df.to_json(filename)：以Json格式导出数据到文本文件

创建测试对象

- pd.DataFrame(np.random.rand(20,5))：创建20行5列的随机数组成的DataFrame对象
- pd.Series(my_list)：从可迭代对象my_list创建一个Series对象
- df.index = pd.date_range('1900/1/30', periods=df.shape[0])：增加一个日期索引

查看、检查数据

- df.head(n)：查看DataFrame对象的前n行
- df.tail(n)：查看DataFrame对象的最后n行
- df.shape()：查看行数和列数
- df.info()：查看索引、数据类型和内存信息
- df.describe()：查看数值型列的汇总统计
- s.value_counts(dropna=False)：查看Series对象的唯一值和计数
- df.apply(pd.Series.value_counts)：查看DataFrame对象中每一列的唯一值和计数

数据选取

- df[col]：根据列名，并以Series的形式返回列
- df[[col1, col2]]：以DataFrame形式返回多列
- s.iloc[0]：按位置选取数据
- s.loc['index_one']：按索引选取数据
- df.iloc[0,:]：返回第一行
- df.iloc[0,0]：返回第一列的第一个元素

数据清理

- df.columns = ['a','b','c']：重命名列名
- pd.isnull()：检查DataFrame对象中的空值，并返回一个Boolean数组
- pd.notnull()：检查DataFrame对象中的非空值，并返回一个Boolean数组
- df.dropna()：删除所有包含空值的行
- df.dropna(axis=1)：删除所有包含空值的列
- df.dropna(axis=1,thresh=n)：删除所有小于n个非空值的行
- df.fillna(x)：用x替换DataFrame对象中所有的空值
- s.astype(float)：将Series中的数据类型更改为float类型
- s.replace(1,'one')：用‘one’代替所有等于1的值
- s.replace([1,3],['one','three'])：用'one'代替1，用'three'代替3
- df.rename(columns=lambda x: x + 1)：批量更改列名
- df.rename(columns={'old_name': 'new_ name'})：选择性更改列名
- df.set_index('column_one')：更改索引列
- df.rename(index=lambda x: x + 1)：批量重命名索引

数据处理：Filter、Sort和GroupBy

- df[df[col] > 0.5]：选择col列的值大于0.5的行
- df.sort_values(col1)：按照列col1排序数据，默认升序排列
- df.sort_values(col2, ascending=False)：按照列col1降序排列数据
- df.sort_values([col1,col2], ascending=[True,False])：先按列col1升序排列，后按col2降序排列数据
- df.groupby(col)：返回一个按列col进行分组的Groupby对象
- df.groupby([col1,col2])：返回一个按多列进行分组的Groupby对象
- df.groupby(col1)[col2]：返回按列col1进行分组后，列col2的均值
- df.pivot_table(index=col1, values=[col2,col3], aggfunc=max)：创建一个按列col1进行分组，并计算col2和col3的最大值的数据透视表
- df.groupby(col1).agg(np.mean)：返回按列col1分组的所有列的均值
- data.apply(np.mean)：对DataFrame中的每一列应用函数np.mean
- data.apply(np.max,axis=1)：对DataFrame中的每一行应用函数np.max

数据合并

- df1.append(df2)：将df2中的行添加到df1的尾部
- df.concat([df1, df2],axis=1)：将df2中的列添加到df1的尾部
- df1.join(df2,on=col1,how='inner')：对df1的列和df2的列执行SQL形式的join

数据统计

- df.describe()：查看数据值列的汇总统计
- df.mean()：返回所有列的均值
- df.corr()：返回列与列之间的相关系数
- df.count()：返回每一列中的非空值的个数
- df.max()：返回每一列的最大值
- df.min()：返回每一列的最小值
- df.median()：返回每一列的中位数
- df.std()：返回每一列的标准差

# [Pillow](https://pillow.readthedocs.io/en/stable/)
https://www.osgeo.cn/pillow/reference/ImageDraw.html  <br />  Bands  <br />  mode

- 1 (1-bit pixels, black and white, stored with one pixel per byte)
- L (8-bit pixels, black and white)
- P (8-bit pixels, mapped to any other mode using a color palette)
- RGB (3x8-bit pixels, true color)
- RGBA (4x8-bit pixels, true color with transparency mask)
- CMYK (4x8-bit pixels, color separation)
- YCbCr (3x8-bit pixels, color video format)
- Note that this refers to the JPEG, and not the ITU-R BT.2020, standard
- LAB (3x8-bit pixels, the L_a_b color space)
- HSV (3x8-bit pixels, Hue, Saturation, Value color space)
- I (32-bit signed integer pixels)
- F (32-bit floating point pixels)

**Image**  <br />  PIL.Image.open(fp, mode='r', formats=None)  <br />  PIL.Image.new(mode, size, color=0)  <br />  **class PIL.Image.Image**

- filename
- format
- mode
- size
- info
- palette
- n_frames

method

- convert(mode=None, matrix=None, dither=None, palette=0, colors=256)	converted copy of this image
- copy()
- crop(box=None)
- getbands()
- getbbox()
- getchannel(channel)
- getcolors(maxcolors=256)
- paste(im, box=None, mask=None)
- resize(size, resample=3, box=None, reducing_gap=None)
- rotate(angle, resample=0, expand=0, center=None, translate=None, fillcolor=None)
- save(fp, format=None, **params)
- show(title=None, command=None)
- split()	Split this image into individual bands(red, green, blue).
- thumbnail(size, resample=3, reducing_gap=2.0)
- transform(size, method, data=None, resample=0, fill=1, fillcolor=None)
- transpose(method)
- PIL.Image.FLIP_LEFT_RIGHT
- PIL.Image.FLIP_TOP_BOTTOM
- PIL.Image.ROTATE_90
- PIL.Image.ROTATE_180
- PIL.Image.ROTATE_270
- PIL.Image.TRANSPOSE
- PIL.Image.TRANSVERSE
```python
import os, sys
from PIL import Image

size = (128, 128)
for infile in sys.argv[1:]:
    outfile = os.path.splitext(infile)[0] + ".thumbnail"
    if infile != outfile:
        try:
            with Image.open(infile) as im:
                im.thumbnail(size)
                im.save(outfile, "JPEG")
        except OSError:
            print("cannot create thumbnail for", infile)
```
PIL.ImageDraw.Draw(im, mode=None)

- ImageDraw.getfont()
- ImageDraw.arc(xy, start, end, fill=None, width=0)
- ImageDraw.chord(xy, start, end, fill=None, outline=None, width=1)
- ImageDraw.ellipse(xy, fill=None, outline=None, width=1)
- ImageDraw.line(xy, fill=None, width=0, joint=None)
- ImageDraw.point(xy, fill=None)
- ImageDraw.polygon(xy, fill=None, outline=None)[
- ImageDraw.regular_polygon(bounding_circle, n_sides, rotation=0, fill=None, outline=None)
- ImageDraw.rectangle(xy, fill=None, outline=None, width=1)
- ImageDraw.text(xy, text, fill=None, font=None, anchor=None, spacing=4, align='left', direction=None, features=None, language=None, stroke_width=0, stroke_fill=None)
- ImageDraw.multiline_text(xy, text, fill=None, font=None, anchor=None, spacing=4, align='left', direction=None, features=None, language=None)
- ImageDraw.textsize(text, font=None, spacing=4, direction=None, features=None, language=None, stroke_width=0)

PIL.ImageFont.load(filename)		bitmap font  <br />  PIL.ImageFont.truetype(font=None, size=10, index=0, encoding='', layout_engine=None)  <br />  PIL.ImageFont.load_default()  <br />  classPIL.ImageFont.ImageFont  <br />  getmask(text, mode='', *args, **kwargs)  <br />  getsize(text, *args, **kwargs)
```python
from PIL import Image, ImageDraw, ImageFont

base = Image.open("images/hopper.png").convert("RGBA")
# make a blank image for the text, initialized to transparent text color
txt = Image.new("RGBA", base.size, (255,255,255,0))
fnt = ImageFont.truetype(r"C:\Windows\Fonts\simsun.ttc", 40)
# get a drawing context
d = ImageDraw.Draw(txt)
# draw text, half opacity
d.text((10,10), "Hello", font=fnt, fill=(255,255,255,128))
# draw text, full opacity
d.text((10,60), "World", font=fnt, fill=(255,255,255,255))
d.multiline_text((100,100), "multiline\ntext", font=fnt, fill=(0, 0, 0, 200))
out = Image.alpha_composite(base, txt)
out.show()
```
PIL.ImageGrab.grab(bbox=None, include_layered_windows=False, all_screens=False, xdisplay=None)	Take a snapshot of the screen  <br />  PIL.ImageGrab.grabclipboard()	Take a snapshot of the clipboard image  <br />  ImageOps.crop(image, border=0)	Remove border from image.  <br />  ImageOps.expand(image, border=0, fill=0)	Add border to the image  <br />  ImageOps.scale(image, factor, resample=3)	rescaled image  <br />  ImageOps.fit(image, size, method=3, bleed=0.0, centering=0.5, 0.5)  <br />  ImageOps.flip(image)	Flip the image vertically (top to bottom)  <br />  ImageOps.grayscale(image)	Convert the image to grayscale.  <br />  ImageOps.mirror(image)  <br />  增强图像
```python
from PIL import ImageEnhance
enh = ImageEnhance.Contrast(im)
enh.enhance(1.3).show("30% more contrast")
```

# [pyinstaller](https://pyinstaller.readthedocs.io/en/stable/)
**pyinstaller 选项 file.py**

| -h，--help | 查看该模块的帮助信息 |
| --- | --- |
| -F，-onefile | 产生单个的可执行文件 |
| -D，--onedir | 产生一个目录（包含多个文件）作为可执行程序 |
| -a，--ascii | 不包含 Unicode 字符集支持 |
| -d，--debug | 产生 debug 版本的可执行文件 |
| -w，--windowed，--noconsolc | 指定程序运行时不显示命令行窗口（仅对 Windows 有效） |
| -c，--nowindowed，--console | 指定使用命令行窗口运行程序（仅对 Windows 有效） |
| -o DIR，--out=DIR | 指定 spec 文件的生成目录。如果没有指定，则默认使用当前目录来生成 spec 文件 |
| -p DIR，--path=DIR | 设置 Python 导入模块的路径（和设置 PYTHONPATH 环境变量的作用相似）。也可使用路径分隔符（Windows 使用分号，Linux 使用冒号）来分隔多个路径 |
| -n NAME，--name=NAME | 指定项目（产生的 spec）名字。如果省略该选项，那么第一个脚本的主文件名将作为 spec 的名字 |
| -i | 改变生成程序的icon图标 |


# [aiohttp](https://docs.aiohttp.org/en/stable/)
```python
import aiohttp
import asyncio

async def fetch(session, url):
    async with session.get(url) as response:
        return await response.text()
    
async def main():
    async with aiohttp.ClientSession() as session:
        html = await fetch(session, 'http://python.org')
        print(html)
        
if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
```

# [jieba](https://github.com/fxsjy/jieba)
四种分词模式：

- 精确模式，试图将句子最精确地切开，适合文本分析；
- 全模式，把句子中所有的可以成词的词语都扫描出来, 速度非常快，但是不能解决歧义；
- 搜索引擎模式，在精确模式的基础上，对长词再次切分，提高召回率，适合用于搜索引擎分词。
- paddle模式，利用PaddlePaddle深度学习框架，训练序列标注（双向GRU）网络模型实现分词。
```python
import jieba

jieba.enable_paddle()# 启动paddle模式。 0.40版之后开始支持
strs=["我来到北京清华大学","乒乓球拍卖完了","中国科学技术大学"]
for str in strs:
    seg_list = jieba.cut(str,use_paddle=True) # 使用paddle模式
    print("Paddle Mode: " + '/'.join(list(seg_list)))
seg_list = jieba.cut("我来到北京清华大学", cut_all=True)
print("Full Mode: " + "/ ".join(seg_list))  # 全模式
seg_list = jieba.cut("我来到北京清华大学", cut_all=False)
print("Default Mode: " + "/ ".join(seg_list))  # 精确模式
seg_list = jieba.cut("他来到了网易杭研大厦")  # 默认是精确模式
print(", ".join(seg_list))
seg_list = jieba.cut_for_search("小明硕士毕业于中国科学院计算所，后在日本京都大学深造")  # 搜索引擎模式
print(", ".join(seg_list))
```
载入词典

- jieba.load_userdict(file_name) # file_name 为文件类对象或自定义词典的路径
- 词典格式和 dict.txt 一样，一个词占一行；每一行分三部分：词语、词频（可省略）、词性（可省略），用空格隔开，顺序不可颠倒。

词性标注

| 标签 | 含义 | 标签 | 含义 | 标签 | 含义 | 标签 | 含义 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| n | 普通名词 | f | 方位名词 | s | 处所名词 | t | 时间 |
| nr | 人名 | ns | 地名 | nt | 机构名 | nw | 作品名 |
| nz | 其他专名 | v | 普通动词 | vd | 动副词 | vn | 名动词 |
| a | 形容词 | ad | 副形词 | an | 名形词 | d | 副词 |
| m | 数量词 | q | 量词 | r | 代词 | p | 介词 |
| c | 连词 | u | 助词 | xc | 其他虚词 | w | 标点符号 |
| PER | 人名 | LOC | 地名 | ORG | 机构名 | TIME | 时间 |

```python
>>> import jieba
>>> import jieba.posseg as pseg
>>> words = pseg.cut("我爱北京天安门") #jieba默认模式
>>> jieba.enable_paddle() #启动paddle模式。 0.40版之后开始支持，早期版本不支持
>>> words = pseg.cut("我爱北京天安门",use_paddle=True) #paddle模式
>>> for word, flag in words:
...    print('%s %s' % (word, flag))
...
我 r
爱 v
北京 ns
天安门 ns
```
jupyter notebook

- 打开指定的notebook文件： jupyter notebook notebook.ipynb
- 指定运行的端口：jupyter notebook --port 9999
- 启动服务器但不打开浏览器：jupyter notebook --no-browser
- 查看服务器帮助内容：jupyter notebook --help

# [openpyxl](https://openpyxl.readthedocs.io/en/stable/)
https://www.osgeo.cn/openpyxl/index.html  <br />  用于读/写Excel2010 XLSX/XLSM/XLTX/XLTM文件  <br />  **workbook**

- load_workbook(filename, read_only=False, keep_vba=KEEP_VBA,
```
data_only=False, keep_links=True)
```

- create_sheet( title=None, index=None)
- create_chartsheet( title=None, index=None)
- index( worksheet)
- move_sheet( sheet, offset=0)
- remove( worksheet)
- save( filename)
- copy_worksheet( from_worksheet)
- close()

**Worksheet**

- cell( row, column, value=None)
- merge_cells( range_string=None, start_row=None, start_column=None, end_row=None, end_column=None)
- append( iterable)
- insert_rows( idx, amount=1)
- delete_rows( idx, amount=1)

**property**

- selected_cell
- sheet_view
- min_row
- max_row
- min_column
- dimensions
- rows
- values
- columns
```python
from openpyxl import Workbook, load_workbook
wb = load_workbook('test.xlsx') # 打开一个workbook
wb = Workbook() #新建一个workbook
wb.save('sample.xlsx')
#操作sheet
ws = wb.active #调用正在运行的工作表
wb.sheetnames  # 获取所有的sheet（列表）
ws = wb['Sheet1'] #获取指定的sheet
ws = wb.create_sheet('mysheet',0) #创建sheet，0指定位置，默认插在指定位置的后面
ws.title = 'New Title' # 设定sheet的名字
target = wb.copy_worksheet(ws) #复制sheet
wb.remove_sheet(wb['Sheet1'])  # 删除sheet
# 操作单元格
ws['A1'].value #打印Sheet1的A1单元格的值
ws.rows # 同 ws.iter_rows() #打印所有行（生成器）
ws.columns # 同ws.iter_cols()#打印所有列（生成器）
ws['A'] #A那一列（元组）
ws['A:C'] #A到C列
ws[1]#第1行（元组）
ws[1:3] #第1到3行（元组）
ws.cell(row = 1,column = 1).value # 同 ws[1][1].value
ws['A1'] = 'test'#特定单元写入值
ws.cell(row = 4,column = 2,value='test') #特定单元格写入值
ws.append([1,2,3])##可以用列表来写入
# 公式
ws['A4']  =  "=SUM(A1:A3)"
# 合并单元格
ws.merge_cells(start_row = 2,start_column = 1,end_row = 2,end_column = 2)
设置样式
from openpyxl.styles import colors , Font
style = Font(name='宋体',color=colors.RED,italic=True,size=14) 
ws['A1'].font = style #设定指定单元格的样式
col = ws.column_dimensions['A']
col.font = style #设定列的样式
row = ws.row_dimensions[1]
row.font = style #设定行的样式
颜色背景
from openpyxl.sytels import PatternFill
sytle = PatternFill('solid',fgColor='#AABBCC',bgColor='#DDEEFF')
ws['A1'].fill = style #指定单元格颜色
```

# [qrcode](https://github.com/sylnsfar/qrcode)
命令行
```python
myqr 	Words
		[-v {1,2,3,...,40}]
		[-l {L,M,Q,H}]
        [-n output-filename]
		[-d output-directory]
		[-p picture_file]
		[-c]
		[-con contrast]
		[-bri brightness]
```
导入模块
```python
from MyQR import myqr

version, level, qr_name = myqr.run(
	words,
    version=1,
    level='H',
    picture=None,
    colorized=False,
    contrast=1.0,
    brightness=1.0,
    save_name=None,
    save_dir=os.getcwd()
	)
 
 
 # help(myqr)
Positional parameter
   words: str
Optional parameters
   version: int, from 1 to 40
   level: str, just one of ('L','M','Q','H')
   picutre: str, a filename of a image
   colorized: bool
   constrast: float
   brightness: float
   save_name: str, the output filename like 'example.png'
   save_dir: str, the output directory
```

# [PySimpleGUI](https://github.com/PySimpleGUI/PySimpleGUI)
```python
import PySimpleGUI as sg                        # Part 1 - The import
# Define the window's contents
layout = [  [sg.Text("What's your name?")],     # Part 2 - The Layout
            [sg.Input()],
            [sg.Button('Ok')] ]
# Create the window
window = sg.Window('Window Title', layout)      # Part 3 - Window Defintion
                                                
# Display and interact with the Window
event, values = window.read()                   # Part 4 - Event loop or Window.read call
# Do something with the information gathered
print('Hello', values[0], "! Thanks for trying PySimpleGUI")
# Finish up by removing from the screen
window.close()                                  # Part 5 - Close the Window
```
```python
import PySimpleGUI as sg
sg.ChangeLookAndFeel('GreenTan')
# ------ Menu Definition ------ #
menu_def = [['&File', ['&Open', '&Save', 'E&xit', 'Properties']],
            ['&Edit', ['Paste', ['Special', 'Normal', ], 'Undo'], ],
            ['&Help', '&About...'], ]
# ------ Column Definition ------ #
column1 = [[sg.Text('Column 1', background_color='lightblue', justification='center', size=(10, 1))],
           [sg.Spin(values=('Spin Box 1', '2', '3'), initial_value='Spin Box 1')],
           [sg.Spin(values=('Spin Box 1', '2', '3'), initial_value='Spin Box 2')],
           [sg.Spin(values=('Spin Box 1', '2', '3'), initial_value='Spin Box 3')]]
layout = [
    [sg.Menu(menu_def, tearoff=True)],
    [sg.Text('(Almost) All widgets in one Window!', size=(30, 1), justification='center', font=("Helvetica", 25), relief=sg.RELIEF_RIDGE)],
    [sg.Text('Here is some text.... and a place to enter text')],
    [sg.InputText('This is my text')],
    [sg.Frame(layout=[
    [sg.Checkbox('Checkbox', size=(10,1)),  sg.Checkbox('My second checkbox!', default=True)],
    [sg.Radio('My first Radio!     ', "RADIO1", default=True, size=(10,1)), sg.Radio('My second Radio!', "RADIO1")]], title='Options',title_color='red', relief=sg.RELIEF_SUNKEN, tooltip='Use these to set flags')],
    [sg.Multiline(default_text='This is the default Text should you decide not to type anything', size=(35, 3)),
     sg.Multiline(default_text='A second multi-line', size=(35, 3))],
    [sg.InputCombo(('Combobox 1', 'Combobox 2'), size=(20, 1)),
     sg.Slider(range=(1, 100), orientation='h', size=(34, 20), default_value=85)],
    [sg.InputOptionMenu(('Menu Option 1', 'Menu Option 2', 'Menu Option 3'))],
    [sg.Listbox(values=('Listbox 1', 'Listbox 2', 'Listbox 3'), size=(30, 3)),
     sg.Frame('Labelled Group',[[
     sg.Slider(range=(1, 100), orientation='v', size=(5, 20), default_value=25, tick_interval=25),
     sg.Slider(range=(1, 100), orientation='v', size=(5, 20), default_value=75),
     sg.Slider(range=(1, 100), orientation='v', size=(5, 20), default_value=10),
     sg.Column(column1, background_color='lightblue')]])],
    [sg.Text('_' * 80)],
    [sg.Text('Choose A Folder', size=(35, 1))],
    [sg.Text('Your Folder', size=(15, 1), auto_size_text=False, justification='right'),
     sg.InputText('Default Folder'), sg.FolderBrowse()],
    [sg.Submit(tooltip='Click to submit this form'), sg.Cancel()]]
window = sg.Window('Everything bagel', layout, default_element_size=(40, 1), grab_anywhere=False)
event, values = window.read()
window.close()
sg.Popup('Title',
         'The results of the window.',
         'The button clicked was "{}"'.format(event),
         'The values are', values)
```
![](https://user-images.githubusercontent.com/13696193/62234730-4295ea00-b399-11e9-9281-5defb91886f6.png#crop=0&crop=0&crop=1&crop=1&id=avOUO&originHeight=638&originWidth=633&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)  <br />  控件列表

- Text # 文本
- InputText # 单行输入框
- Button # 按钮
- FileBrowse # 文件选择，选择多个文件FilesBrowse，保存文件FileSaveAs
- FolderBrowse # 文件夹选择
- CalendarButton # 日历选择，必须输入按钮名如'choose date'，返回字符串
- ColorChooser # 颜色选择，如sg.ColorChooserButton('颜色选择')，返回RGB元组
- Combo # 下拉选择菜单，如sg.Combo(['choice 1', 'choice 2'])
- Checkbox # 复选框。如sg.Checkbox('My first Checkbox!', default=True)，返回布尔值
- Radio # 单选按钮，如sg.Radio('My first Radio!', "RADIO1", default=True)，sg.Radio('My second radio!', "RADIO1")，第一个是显示的字符，第二个是单选按钮所在组，只有在同一组的单选按钮才有排他性，第三个是默认选中，返回布尔值True or False
- Listbox # 列表框，如sg.Listbox(values=['Listbox 1', 'Listbox 2', 'Listbox 3']
- Slider # 滚动条，如sg.Slider(range=(1,500),default_value=222,orientation='horizontal')，垂直是vertical
- Multiline # 多行输入框
- Multi-line Text Output (not on tkinter version)
- Spin # 一个可以上下调节的控件，如sg.Spin([i for i in range(1,11)], initial_value=1)
- ProgressBar # 进度条
- Menu # 菜单
- ButtonMenu # 菜单按钮
- Frame # 框
- Image # 图片查看，只支持png,gif格式
- TabGroup # 选项卡
- Output # 输出框

# Pywin32
win32api 提供了常用的用户API  <br />  win32clipboard 提供了有关粘贴板的API  <br />  win32console 提供了有关控制台的API  <br />  win32gui 提供了有关windows用户界面图形操作的API  <br />  win32service 提供了有关服务操作的API  <br />  win32file 提供了有关文件操作的API  <br />  win32con：基本上所有宏都集成在这里(5k+)  <br />  winerror：系统错误码的宏定义 来源于winerror.h
```python
win32api.MessageBox(None,"Hello Pywin32","pywin32",win32con.MB_YESNO)
#获取鼠标位置
win32api.GetCursorPos()
 
#鼠标左键按下
win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN, 0, 0, 0, 0)
 
#鼠标左键放开
win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP, 0, 0, 0, 0)
 
#鼠标右键按下
win32api.mouse_event(win32con.MOUSEEVENTF_RIGHTDOWN, 0, 0, 0, 0)
 
#鼠标右键放开
win32api.mouse_event(win32con.MOUSEEVENTF_RIGHTUP, 0, 0, 0, 0)
 
#设置鼠标位置
win32api.SetCursorPos((x, y))
 
#键盘输入事件
win32api.keybd_event(VK_CODE[word], 0, 0, 0)
win32api.keybd_event(VK_CODE[word], 0, win32con.KEYEVENTF_KEYUP, 0)
```

# [pywinauto](https://github.com/pywinauto/pywinauto)
**GUI对象检查工具**  <br />  Inspect.exe 	Windows Kits\10\bin\10.0.18362.0\x64  <br />  Win32 API (backend="win32") - 现在的默认backend

- MFC, VB6, VCL, 简单的WinForms控件和大多数旧的遗留应用程序

MS UI Automation (backend="uia")

- WinForms, WPF, Store apps, Qt5, 浏览器

注意: Chrome在启动之前需要--force-renderer-accessibility cmd标志  <br />  **属性解析**

- 按标题（窗口文字，名称）： app.Properties.OK.click()
- 按标题和控件类型： app.Properties.OKButton.click()
- 按控件类型和编号： app.Properties.Button3.click()
- 按左上角标签和控件类型： app.OpenDialog.FileNameEdit.set_text("")
- 按控件类型和项目文本：app.Properties.TabControlSharing.select("General")
```python
from pywinauto import application
app = application.Application()
app.start("Notepad.exe")
app.UntitledNotepad.draw_outline()
app.UntitledNotepad.menu_select("编辑(&E) -> 粘贴(&P)")
```





# [paramiko](https://github.com/paramiko/paramiko)

```python
# coding:utf8

import paramiko
import os
import time

class SshConnectError(Exception):
    pass

class controlHost:
    def __init__(self, host, username, password, port=22, key_file='C:/Users/Ylem/.ssh/id_rsa'):  # 本地密钥文件路径
        self.host = host
        self.pkey = paramiko.RSAKey.from_private_key_file(key_file)
        # 调用类中的静态方法__sshConn 返回ssh连接对象
        self.ssh = controlHost.__sshConn(
            host, username, password, self.pkey, port)
        self.sftp = self.__sftpConn()

    def close(self):
        if hasattr(self.ssh, "close"):
            self.ssh.close()

    @staticmethod
    def __sshConn(host, username, password, pkey, port):
        # 创建一个SSH客户端client对象
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        try:
            ssh.connect(hostname=host, port=port,
                        username=username, pkey=pkey)
            print('免密登陆方式')
        except:
            try:
                ssh.connect(hostname=host, port=port,
                            username=username, password=password)
                print('密码认证')
            except AuthenticationException:
                logging.warning('username or password error')
            except NoValidConnectionsError:
                logging.warning('connect time out')
            except:
                print("Unexpected error:", sys.exc_info()[0])
            else:
                return ssh
        else:
            return ssh

    # 返回sftp通道实例对象 方法
    def __sftpConn(self):
        transport = self.ssh.get_transport()
        # 创建一个已连通的SFTP客户端通道
        sftp = paramiko.SFTPClient.from_transport(transport)
        return sftp

    # 执行命令方法
    def exeCommand(self, cmd, timeout=300):
        stdin, stdout, stderr = self.ssh.exec_command(cmd, timeout=timeout)
        channel = stdout.channel
        exit_code = channel.recv_exit_status()
        # 报错返回码是127，没有报错是0
        stdout = stdout.read().strip().decode("utf-8")
        stderr = stderr.read().strip().decode("utf-8")
        return {"stdout": stdout, "stderr": stderr, 'exit_code': exit_code}

    def interact(self):
        self.channel = self.ssh.invoke_shell()
        print("--- 开启ssh交互式终端 --- \r\n")

    def interactConmands(self, cmds):
        cmds.append('exit')
        for cmd in cmds:
            time.sleep(0.5)
            self.channel.send(cmd+' \r\n')
            time.sleep(0.5)
            result = self.channel.recv(9999)
            yield result.decode("utf-8")

    # 文件上传下载方法
    def sftpFile(self, localpath, remotepath, action):
        try:
            if action == 'push':
                dirname = os.path.dirname(remotepath)
                self.exeCommand(f"mkdir -p {dirname}")
                self.sftp.put(localpath, remotepath)
                return {"status": 1, "message": f'sftp {self.host} {action} success!'}
            elif action == "pull":
                dirname = os.path.dirname(localpath)
                if not os.path.exists(dirname):
                    os.makedirs(dirname)
                # if os.path.exists(localpath):
                os.remove(localpath)
                self.sftp.get(remotepath, localpath)
                return {"status": 1, "stdout": f'sftp {self.host} {action} success!', "stderr": ""}
        except Exception as e:
            return {"status": 0, "stderr": f'sftp {self.host} {action} failed {str(e)}', "stdout": ""}

    @staticmethod
    def iter_local_path(abs_path):
        '''遍历本机该目录中所有的文件，并返回'''
        result = set([])
        for j in os.walk(abs_path):
            print(j)
            base_path = j[0]
            file_list = j[2]
            for k in file_list:
                p = os.path.join(base_path, k)
                result.add(p)
        return result

    def iter_remote_path(self, abs_path):
        '''获取远程主机绝对路径下的所有文件'''
        result = set([])
        try:
            stat = str(self.sftp.lstat(abs_path))
            print('stat', stat)
        except FileNotFoundError:
            return result
        else:
            if stat.startswith("d"):
                file_list = self.exeCommand(f"ls {abs_path}")["stdout"].decode(
                    encoding='utf-8').strip().splitlines()

                for j in file_list:
                    p = os.path.join(abs_path, j)
                    result.update(self.iter_remote_path(p))
            else:
                result.add(abs_path)
        return result


if __name__ == '__main__':
    ssh = controlHost(host="192.168.0.100", username="u0_a168",
                      password="1999", port=8022)

    # 测试 获取本地某个目录的所有文件
    # w = ssh.iter_local_path("/root/test")
    # print(w)

    # 测试 获取远程主机某个目录的所有文件
    # y = ssh.iter_remote_path("/root/test")
    # print(y)

    # 测试 上传下载
    # 将本地机器的/tmp/ansible.txt，上传至远程主机/tmp目录下并命名为xx.sh
    # w = ssh.sftpFile("/tmp/ansible.txt", '/tmp/xx.txt', "push")
    # w = ssh.sftpFile('/tmp/aaaa.py', '/tmp/xyz.py', 'pull')
    ssh.interact()
    g = ssh.interactConmands(['pwd', 'ls', 'whoami'])
    for h in g:
        print('---------')
        print(h)
    ssh.close()

```












WSGI（Web Server Gateway Interface）一种描述web server如何与web application通信的规范。（PEP 3333）  <br />  Web程序必须有一个可调用对象，且该可调用对象接收两个参数，返回一个可迭代对象：

- environ：字典，包含请求的所有信息
- start_response：在可调用对象中调用的函数，用来发起响应，参数包括状态码，headers等
