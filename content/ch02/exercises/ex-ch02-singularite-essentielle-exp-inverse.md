---
id: ex-ch02-singularite-essentielle-exp-inverse
type: exercise
chapters: [2]
title: Intégrer autour d'une singularité essentielle
source: "Classique (intégrales trigonométriques de type Bessel, calculées par une série de Laurent)"
difficulty: 2
time: 25
tools: [ch02-laurent-couronne-cauchy, ch02-classification-singularites, ch02-pole-meromorphe-def, ch02-residu-integrale-cercle, ch01-integrale-sur-cercle, ch01-integrale-primitive]
---
## Énoncé

Pour $n\in\Z$, on considère la fonction $f_n(z)=z^{n-1}e^{1/z}$, holomorphe sur $\C^\times=\C\setminus\{0\}$.

1. Écrire le développement de $f_n$ en série de Laurent $\sum_{m\in\Z}a_mz^m$ sur $\C^\times$. La fonction $z\mapsto e^{1/z}$ est-elle méromorphe sur $\C$ ? Quelle est la nature de sa singularité en $0$ ?
2. Calculer $\displaystyle\int_{C(0,1)}z^{n-1}e^{1/z}\,dz$ (cercle unité parcouru dans le sens direct). Peut-on invoquer le théorème des résidus du cours ? Justifier soigneusement le calcul.
3. En déduire, pour tout $n\in\Z$, les valeurs de
$$
J_n=\int_0^{2\pi}e^{\cos\theta}\cos(n\theta-\sin\theta)\,d\theta
\qquad\text{et}\qquad
K_n=\int_0^{2\pi}e^{\cos\theta}\sin(n\theta-\sin\theta)\,d\theta .
$$
4. En déduire, pour $n\ge1$, la valeur de $\displaystyle\int_0^{2\pi}e^{\cos\theta}\cos(\sin\theta)\cos(n\theta)\,d\theta$.

## Indices

### Indice 1
On connaît la série de $e^w$ pour tout $w\in\C$ : prendre $w=1/z$. Pour intégrer sur un cercle une série de puissances (positives et négatives) de $z$, que sait-on de $\int_{C(0,1)}z^m\,dz$ ?

### Indice 2
$e^{1/z}$ n'a pas de pôle en $0$ : une infinité de coefficients d'indice négatif sont non nuls. La formule des résidus du cours (fonctions **méromorphes**) ne s'applique pas telle quelle ; mais la série de Laurent converge **normalement** sur le cercle unité, ce qui permet d'intégrer terme à terme.

### Indice 3
Avec $z=e^{i\theta}$ : $z^{n-1}e^{1/z}\,dz=i\,e^{\cos\theta}e^{i(n\theta-\sin\theta)}\,d\theta$. Pour la question 4, additionner $J_n$ et $J_{-n}$.

## Corrigé

**1.** Pour tout $w\in\C$, $e^w=\sum_{k\ge0}\frac{w^k}{k!}$. Avec $w=1/z$, $z\neq0$ :
$$
f_n(z)=z^{n-1}\sum_{k\ge0}\frac{z^{-k}}{k!}=\sum_{k\ge0}\frac{z^{\,n-1-k}}{k!},
\qquad\text{soit}\qquad a_m=\begin{cases}\dfrac{1}{(n-1-m)!}&\text{si } m\le n-1,\\ 0&\text{si } m\ge n.\end{cases}
$$
En particulier pour $e^{1/z}$ ($n=1$) : $a_{-k}=1/k!\neq0$ pour **tout** $k\ge0$. Si $e^{1/z}$ était méromorphe sur $\C$, elle aurait en $0$ soit une singularité effaçable, soit un pôle, et son développement de Laurent au voisinage de $0$ n'aurait qu'un nombre fini de termes d'indice négatif ([[ch02-laurent-developpement]] : $f(z)=\sum_{n\ge-m}a_n z^n$). Par unicité des coefficients de Laurent (ils sont donnés par $a_m=\frac{1}{2i\pi}\int_{C(0,r)}\frac{f(z)}{z^{m+1}}dz$, [[ch02-laurent-couronne-cauchy]]), c'est impossible. Donc $e^{1/z}$ n'est pas méromorphe sur $\C$ : $0$ est une **singularité essentielle** ([[ch02-classification-singularites]]). On le voit aussi directement : $e^{1/x}\to+\infty$ quand $x\to0^+$ mais $e^{1/x}\to0$ quand $x\to0^-$, donc $|e^{1/z}|$ n'a pas de limite $+\infty$ en $0$ (pas de pôle) et n'est pas bornée (pas effaçable).

**2.** Le théorème des résidus du poly (Théorème II.5.1, p. 47) suppose $f$ **méromorphe** : il ne s'applique pas tel quel. On calcule directement.

Sur le cercle $|z|=1$, le terme général vérifie $\left|\frac{z^{n-1-k}}{k!}\right|=\frac1{k!}$, et $\sum_k\frac1{k!}<\infty$ : la série converge **normalement**, donc uniformément, sur le cercle. On peut donc intégrer terme à terme (l'intégrale le long d'un chemin est, après paramétrage $z=e^{it}$, une intégrale sur le segment $[0,2\pi]$, qui passe à la limite uniforme) :
$$
\int_{C(0,1)}f_n(z)\,dz=\sum_{k\ge0}\frac{1}{k!}\int_{C(0,1)}z^{\,n-1-k}\,dz .
$$
Pour $m\in\Z$, $m\neq-1$, $z^m$ admet sur $\C^\times$ la primitive holomorphe $\frac{z^{m+1}}{m+1}$, donc $\int_{C(0,1)}z^m\,dz=0$ ([[ch01-integrale-primitive]]) ; pour $m=-1$, $\int_{C(0,1)}\frac{dz}{z}=i\int_0^{2\pi}\frac{e^{it}}{e^{it}}dt=2i\pi$ ([[ch01-integrale-sur-cercle]]). Le seul terme qui contribue est celui où $n-1-k=-1$, c'est-à-dire $k=n$, qui n'existe que si $n\ge0$ :
$$
\int_{C(0,1)}z^{n-1}e^{1/z}\,dz=\begin{cases}\dfrac{2i\pi}{n!}&\text{si } n\ge0,\\ 0&\text{si } n<0.\end{cases}
$$
Autrement dit, on a encore « $\int_{C(0,1)}f=2i\pi\,a_{-1}$ » : c'est la formule $a_{-1}=\frac{1}{2i\pi}\int_{C(0,r)}f$ de l'exercice II.7.4 du poly (p. 50), valable pour toute fonction holomorphe sur un disque épointé, méromorphe ou non (même argument que [[ch02-residu-integrale-cercle]]).

**3.** Paramétrons $C(0,1)$ par $z=e^{i\theta}$, $\theta\in[0,2\pi]$ : $dz=ie^{i\theta}d\theta$ et $\frac1z=e^{-i\theta}=\cos\theta-i\sin\theta$, donc
$$
z^{n-1}e^{1/z}\,dz=e^{i(n-1)\theta}\,e^{\cos\theta}e^{-i\sin\theta}\,ie^{i\theta}\,d\theta=i\,e^{\cos\theta}\,e^{i(n\theta-\sin\theta)}\,d\theta .
$$
Ainsi $\int_{C(0,1)}f_n=i\,(J_n+iK_n)$. Avec la question 2 :
$$
J_n+iK_n=\begin{cases}\dfrac{2\pi}{n!}&(n\ge0)\\0&(n<0)\end{cases}
\qquad\Longrightarrow\qquad
J_n=\frac{2\pi}{n!}\ (n\ge0),\quad J_n=0\ (n<0),\quad K_n=0\ (n\in\Z),
$$
en identifiant parties réelle et imaginaire ($J_n,K_n$ sont réels). Contrôle : $K_n=0$ se voit aussi par le changement de variable $\theta\mapsto2\pi-\theta$, qui change l'intégrande en son opposé. Exemples : $J_0=\int_0^{2\pi}e^{\cos\theta}\cos(\sin\theta)\,d\theta=2\pi$ et $J_{-1}=\int_0^{2\pi}e^{\cos\theta}\cos(\theta+\sin\theta)\,d\theta=0$ (valeurs vérifiées numériquement).

**4.** Pour $n\ge1$, $\cos(n\theta-\sin\theta)+\cos(-n\theta-\sin\theta)=2\cos(n\theta)\cos(\sin\theta)$ (formule $\cos(a-b)+\cos(-a-b)=2\cos a\cos b$). Donc
$$
\int_0^{2\pi}e^{\cos\theta}\cos(\sin\theta)\cos(n\theta)\,d\theta=\frac{J_n+J_{-n}}{2}=\frac{1}{2}\left(\frac{2\pi}{n!}+0\right)=\frac{\pi}{n!}.
$$

## Pièges et variantes

* Appliquer mécaniquement « la formule des résidus » à $e^{1/z}$ en disant « pôle en $0$ » : faux, ce n'est pas un pôle. Le résultat $2i\pi a_{-1}$ reste juste, mais **la justification** doit passer par la série de Laurent (convergence normale sur le cercle et intégration terme à terme) ou par la formule $a_{-1}=\frac1{2i\pi}\int_{C(0,r)}f$ de l'exercice II.7.4.
* Se tromper de coefficient : le résidu de $z^{n-1}e^{1/z}$ est le coefficient de $z^{-1}$, c'est-à-dire le terme $k=n$ de la série de $e^{1/z}$, et non le terme $k=n-1$.
* Oublier que pour $n<0$ aucun terme n'est en $z^{-1}$ : $J_n=0$. Ce n'est pas une erreur de calcul, c'est une vraie annulation.
* Variante : la question 4 dit que $\theta\mapsto e^{\cos\theta}\cos(\sin\theta)=\Re\big(e^{e^{i\theta}}\big)$ a pour coefficients de Fourier $\frac1{n!}$ en $\cos(n\theta)$ ; on le retrouve en développant $e^{e^{i\theta}}=\sum_k\frac{e^{ik\theta}}{k!}$. Plus généralement, pour $F$ entière, $\frac{1}{2i\pi}\int_{C(0,1)}z^{n-1}F(1/z)\,dz=\frac{F^{(n)}(0)}{n!}$ pour $n\ge0$.
* Variante : $\int_{C(0,1)}\sin(1/z)\,dz=2i\pi$ et $\int_{C(0,1)}\cos(1/z)\,dz=0$ (seuls comptent les coefficients de $z^{-1}$ : $1$ et $0$).
