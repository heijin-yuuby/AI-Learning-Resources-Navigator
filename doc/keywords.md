AI 发展关键词介绍

在当今人工智能飞速发展的时代，各种新技术、新术语层出不穷。以下为您介绍一些理解当下 AI 发展的关键术语，帮助您更好地把握这一前沿领域。
LLM（大语言模型，Large Language Model）
LLM 是一类基于深度学习的人工智能模型，如广为人知的 GPT（Generative Pretrained Transformer）系列、LLaMA（Large Language Model Meta AI）等。这些模型通过在海量文本数据上进行无监督预训练，学习到语言的结构、语义和语法等知识。它们具备强大的语言理解与生成能力，能完成诸如文本创作、问答系统、机器翻译等多种自然语言处理任务。以 GPT-4 为例，它可以理解复杂的问题指令，生成逻辑连贯、内容丰富的文本回答，甚至在创意写作、代码生成等方面表现出色，为智能交互和内容生产带来了革命性的变化 。
蒸馏（Distillation）
蒸馏是一种模型压缩技术，旨在将一个复杂、庞大的教师模型（通常性能强大但计算成本高）的知识迁移到一个较小、更高效的学生模型中。其核心思想是让学生模型学习教师模型的输出（软标签）而非仅仅学习真实标签。比如，在图像分类任务中，教师模型对一张图片的预测可能是对各类别的概率分布，学生模型通过学习这种概率分布，能更好地捕捉到数据中的细微特征和关系。通过蒸馏，学生模型在保持较高性能的同时，减少了模型参数和计算量，使得在资源受限的设备（如移动设备、边缘计算设备）上也能快速运行 AI 应用，并且降低了部署成本 。
参数（Parameters）
参数是深度学习模型中的重要组成部分，是模型在训练过程中学习和调整的变量。在神经网络中，参数通常指神经元之间连接的权重（weights）和偏置（biases）。以一个简单的全连接神经网络为例，每个神经元接收来自上一层神经元的输入，这些输入通过权重进行加权求和，再加上偏置后经过激活函数得到输出。模型的参数数量越多，其理论上能够学习到的模式和表达能力就越强。例如，GPT-3 拥有 1750 亿个参数，如此庞大的参数规模使得它能够处理极其复杂的自然语言任务。但参数过多也会带来训练成本高、计算资源需求大以及过拟合等问题 。
微调（Fine - tuning）
微调是在已经预训练好的模型基础上，针对特定任务或数据集进行进一步训练的过程。由于预训练模型在大规模通用数据上学习到了丰富的知识，但在具体应用场景中可能需要更专业的表现。比如，一个在通用文本上预训练的语言模型，在用于医疗领域的问答任务时，通过在医疗相关文本数据集上进行微调，模型能够更好地理解和回答医疗问题。微调通常只需要少量的特定领域数据和较少的训练时间，就能显著提升模型在该领域的性能，是将通用 AI 模型应用于实际场景的重要手段 。
强化学习（Reinforcement Learning）
强化学习是一种机器学习范式，智能体（agent）通过与环境进行交互，根据环境反馈的奖励信号来学习最优行为策略。智能体在环境中采取行动，环境根据其行动给出奖励或惩罚反馈，智能体的目标是通过不断尝试，找到能使长期累积奖励最大化的策略。在 AI 领域，强化学习在机器人控制、自动驾驶、游戏等领域有广泛应用。例如，OpenAI 的 Dota 2 机器人通过强化学习，经过大量的自我对战训练，能够在复杂的游戏环境中击败人类职业选手，展示了强化学习在解决复杂决策问题上的巨大潜力 。
迁移学习（Transfer Learning）
迁移学习旨在将在一个或多个源任务上学习到的知识迁移到一个目标任务上。当目标任务的数据量有限时，迁移学习尤为重要。例如，在图像识别领域，一个在大规模图像数据集（如 ImageNet）上预训练好的模型，已经学习到了丰富的图像特征（如边缘、纹理等）。当要进行特定类型图像（如医学影像）的识别任务时，可以将预训练模型的参数迁移过来，并在医学影像数据集上进行微调。这样可以避免在目标任务上从头开始训练模型，大大减少训练时间和数据需求，同时提高模型在目标任务上的性能 。
深度学习（Deep Learning, DL）：机器学习分支，用多层神经网络处理复杂数据，如图像、语音和文本。模拟人脑神经网络结构，自动提取高级特征，处理大规模高维度数据表现佳。核心是神经网络，如卷积神经网络（CNN ）用于图像识别、循环神经网络（RNN ）用于自然语言处理 。
神经网络（Neural Network）：模仿人脑神经元结构的计算模型，由节点（神经元）和连接（权重）构成，处理分析数据。神经元接收输入经激活函数处理后输出，多层神经元堆叠成深度神经网络，通过调整权重优化性能，常用反向传播算法和梯度下降法训练 。
监督学习（Supervised Learning）：机器学习方法，模型依据标记数据训练，学习输入与输出映射关系。训练数据含输入特征和标签，目标是学习函数实现正确映射，算法有线性回归、逻辑回归等，用于房价预测、疾病诊断等 。
无监督学习（Unsupervised Learning）：机器学习方法，模型从未标记数据学习，挖掘数据结构和模式，如聚类或降维 。常见算法有 K 均值聚类、主成分分析等，用于客户细分、异常检测 。
数据标注（Data Labeling）：为原始数据添加标签或注释，使其成为监督学习训练数据。可手动或用半自动、自动工具完成，高质量标注对模型性能关键，用于图像分类、语音识别等标注场景 。
特征工程（Feature Engineering）：从原始数据提取、选择和转换特征，提升机器学习模型性能。特征是模型输入变量，技术包括特征选择、缩放、生成等，用于金融风控、推荐系统等提取相关特征 。
模型评估（Model Evaluation）：借助指标和测试数据评估机器学习模型性能，判断模型在新数据上表现。常见指标有准确率、精确率等 ，评估分训练集、验证集和测试集，避免过拟合和欠拟合，用于各类模型评估场景 。
过拟合（Overfitting）：模型在训练数据表现好，但在新数据上表现差，因模型复杂学习了噪声或无关特征。解决办法有正则化、增加数据量等 。
欠拟合（Underfitting）：模型在训练数据和新数据上表现都差，因模型简单无法捕捉复杂模式。解决措施包括增加模型复杂度、特征工程等 。
超参数调优（Hyperparameter Tuning）：通过实验和优化确定模型最佳超参数，超参数是训练前设置的参数，如学习率等。方法有网格搜索、随机搜索等 。
生成式对抗网络（Generative Adversarial Network, GAN） ：由生成器和判别器两个模型构成，生成器尝试生成数据（如图像），判别器判断生成数据真假，二者博弈提升生成数据质量，用于图像生成、伪造数据检测等 。
自然语言处理（Natural Language Processing, NLP） ：让计算机理解、处理人类语言，涵盖文本分类、机器翻译、问答系统等任务，涉及词法分析、句法分析、语义分析等技术 。
计算机视觉（Computer Vision, CV） ：赋予计算机识别图像和视频中对象、场景等能力，用于人脸识别、目标检测、图像分割、视频监控等领域 。
迁移学习（Transfer Learning） ：将在一个任务或数据集上学到的知识迁移到另一个相关任务或数据集，节省训练时间和资源，如在大规模图像数据集预训练模型用于特定图像分类任务 。
模型压缩（Model Compression） ：减少深度学习模型规模和计算量，便于在资源受限设备（如移动端）部署，方法有剪枝（去除不重要连接或神经元）、量化（降低参数精度 ）、知识蒸馏（用大模型知识教小模型 ）等 。
因果推断（Causal Inference） ：从数据中推断因果关系，区别于关联关系，帮助理解事件因果机制，在医疗、经济等领域用于决策制定，如判断药物疗效 。
多模态学习（Multimodal Learning） ：融合多种模态数据（如文本、图像、语音）进行学习，让模型获取更全面信息，用于智能客服（结合语音和文本 ）、自动驾驶（融合视觉和雷达数据 ）等 。
强化学习（Reinforcement Learning, RL）：模型通过与环境交互，依据奖励和惩罚机制学习最优策略。智能体在环境中采取行动获反馈，目标是最大化累积奖励，用于游戏 AI、机器人控制等 