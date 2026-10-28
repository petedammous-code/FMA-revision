---
id: ex-ch04-log-module-moyenne
type: exercise
chapters: [4, 2]
title: Moyenne de $\log|e^{i\theta}-a|$ sur le cercle et intégrales de log
source: "Classique (Stein–Shakarchi, *Complex Analysis*, ch. 5, § 1 : lemme de la preuve de la formule de Jensen ; adapté)"
difficulty: 2
time: 25
tools: [ch04-harmonique-moyenne-maximum, ch04-holomorphe-implique-harmonique, ch02-logarithme-determination-principale-def]
---
## Énoncé

Pour $a\in\C$, on pose, lorsque l'intégrale a un sens,
$$
I(a)=\frac1{2\pi}\int_0^{2\pi}\log\big|e^{i\theta}-a\big|\,d\theta .
$$
1. Montrer que $I(a)=0$ si $|a|<1$ et $I(a)=\log|a|$ si $|a|>1$.
2. On suppose $|a|=1$. Montrer que l'intégrale définissant $I(a)$ est absolument convergente et que $I(a)=0$. En déduire la valeur de $\displaystyle\int_0^\pi\log(\sin t)\,dt$.
3. Soit $P(z)=c\prod_{k=1}^n(z-a_k)$ un polynôme non nul ($c\neq0$). Montrer que
$$
\frac1{2\pi}\int_0^{2\pi}\log\big|P(e^{i\theta})\big|\,d\theta=\log|c|+\sum_{k=1}^n\log\max(1,|a_k|).
$$
En déduire, pour tout réel $r\ge0$, la valeur de $\displaystyle\int_0^{2\pi}\log\big(1-2r\cos\theta+r^2\big)\,d\theta$.

## Indices

### Indice 1
Une moyenne sur un cercle d'une fonction de la forme $\log|\text{holomorphe sans zéro}|$ : quelle propriété des fonctions harmoniques ?

### Indice 2
Si $|a|<1$ : $|e^{i\theta}-a|=|1-\bar a e^{i\theta}|$ et $z\mapsto\log|1-\bar az|$ est harmonique sur un disque $D(0,R)$ avec $R>1$ (c'est $\Re\,\mathrm{Log}(1-\bar az)$). Propriété de la moyenne sur $\bar D(0,1)$. Si $|a|>1$, factoriser $|a|$.

### Indice 3
Pour $|a|=1$, se ramener à $a=1$ par rotation, puis faire tendre $r\to1^-$ dans $I(r)=0$ par convergence dominée. Minoration utile : $|e^{i\theta}-r|^2=(1-r)^2+4r\sin^2(\theta/2)\ge 2\sin^2(\theta/2)$ pour $r\in[\tfrac12,1[$.

## Corrigé

**1.** *Cas $|a|<1$.* En prenant le conjugué, $|e^{i\theta}-a|=|e^{-i\theta}-\bar a|=|e^{-i\theta}|\,|1-\bar ae^{i\theta}|=|1-\bar ae^{i\theta}|$. Posons $R=1/|a|$ si $a\neq0$ et $R=+\infty$ si $a=0$ ; donc $R>1$. Pour $z\in D(0,R)$, on a $|\bar az|<1$, donc $1-\bar az\in D(1,1)\subset\{\Re(w)>0\}\subset\C\setminus\R_-$. La fonction $\varphi(z)=\mathrm{Log}(1-\bar az)$ est donc holomorphe sur $D(0,R)$ (composée de fonctions holomorphes, [[ch02-logarithme-determination-principale-def]]) et
$$
h(z):=\log|1-\bar az|=\Re\,\varphi(z)
$$
est harmonique réelle sur $D(0,R)$ ([[ch04-holomorphe-implique-harmonique]]). Le disque fermé $\bar D(0,1)$ est inclus dans $D(0,R)$ puisque $R>1$ ; la propriété de la moyenne ([[ch04-harmonique-moyenne-maximum]], Corollaire IV.2.5, p. 77) donne
$$
I(a)=\frac1{2\pi}\int_0^{2\pi}h(e^{i\theta})\,d\theta=h(0)=\log1=0.
$$

*Cas $|a|>1$.* On écrit $|e^{i\theta}-a|=|a|\,\big|1-e^{i\theta}/a\big|$, donc $\log|e^{i\theta}-a|=\log|a|+k(e^{i\theta})$ avec $k(z)=\log|1-z/a|=\Re\,\mathrm{Log}(1-z/a)$, harmonique sur $D(0,|a|)\supset\bar D(0,1)$ (même argument : $|z/a|<1$). Par la propriété de la moyenne, $\frac1{2\pi}\int_0^{2\pi}k(e^{i\theta})\,d\theta=k(0)=0$, donc $I(a)=\log|a|$.

En résumé : $I(a)=\log\max(1,|a|)$ pour $|a|\neq1$.

**2.** *Réduction à $a=1$.* Écrivons $a=e^{i\varphi}$. Alors $|e^{i\theta}-e^{i\varphi}|=|e^{i(\theta-\varphi)}-1|$ et, la fonction intégrée étant $2\pi$-périodique en $\theta$, le changement de variable $\theta\mapsto\theta+\varphi$ montre que $I(a)=I(1)$ (sous réserve de convergence, qui se transporte de même).

*Convergence.* Pour $\theta\in\,]0,2\pi[$, $|e^{i\theta}-1|=|e^{i\theta/2}|\,|e^{i\theta/2}-e^{-i\theta/2}|=2\sin(\theta/2)$, donc $\log|e^{i\theta}-1|=\log2+\log\sin(\theta/2)$. Par concavité de $\sin$ sur $[0,\pi/2]$, $\sin(\theta/2)\ge\theta/\pi$ pour $\theta\in[0,\pi]$, d'où $|\log\sin(\theta/2)|\le|\log(\theta/\pi)|$ sur $]0,\pi]$, intégrable ; sur $[\pi,2\pi[$ on utilise la symétrie $\theta\mapsto2\pi-\theta$. L'intégrale est donc absolument convergente.

*Valeur.* Pour $r\in[\tfrac12,1[$, la question 1 donne $I(r)=0$. Pour tout $\theta$,
$$
|e^{i\theta}-r|^2=1-2r\cos\theta+r^2=(1-r)^2+2r(1-\cos\theta)=(1-r)^2+4r\sin^2(\theta/2),
$$
donc $2\sin^2(\theta/2)\le|e^{i\theta}-r|^2\le(1+r)^2\le4$. Ainsi, pour $\theta\in\,]0,2\pi[$,
$$
\big|\log|e^{i\theta}-r|\big|\le\log2+\big|\log\sin(\theta/2)\big|=:\Theta(\theta),
$$
fonction intégrable sur $]0,2\pi[$ (étape précédente) et **indépendante de $r$**. De plus $\log|e^{i\theta}-r|\to\log|e^{i\theta}-1|$ quand $r\to1^-$ pour tout $\theta\in\,]0,2\pi[$ (continuité, $e^{i\theta}\neq1$). Le théorème de convergence dominée (appliqué le long de toute suite $r_n\to1^-$) donne
$$
I(1)=\lim_{r\to1^-}I(r)=0.
$$

*Conséquence.* $0=I(1)=\log2+\frac1{2\pi}\int_0^{2\pi}\log\sin(\theta/2)\,d\theta=\log2+\frac1{\pi}\int_0^{\pi}\log(\sin t)\,dt$ (changement de variable $\theta=2t$). Donc
$$
\int_0^\pi\log(\sin t)\,dt=-\pi\log2 .
$$

**3.** Pour tout $\theta$ tel que $P(e^{i\theta})\neq0$ (c'est-à-dire sauf pour un nombre fini de $\theta\in[0,2\pi]$), $\log|P(e^{i\theta})|=\log|c|+\sum_k\log|e^{i\theta}-a_k|$. Chaque terme est intégrable sur $[0,2\pi]$ d'après 1 et 2 ; par linéarité,
$$
\frac1{2\pi}\int_0^{2\pi}\log|P(e^{i\theta})|\,d\theta=\log|c|+\sum_{k=1}^nI(a_k)=\log|c|+\sum_{k=1}^n\log\max(1,|a_k|).
$$
*Application.* Pour $r\ge0$ réel, $1-2r\cos\theta+r^2=|e^{i\theta}-r|^2$ (calcul ci-dessus), donc
$$
\int_0^{2\pi}\log\big(1-2r\cos\theta+r^2\big)\,d\theta=2\cdot2\pi\,I(r)=4\pi\log\max(1,r)=\begin{cases}0&\text{si }0\le r\le1,\\ 4\pi\log r&\text{si }r>1.\end{cases}
$$
Par exemple $\int_0^{2\pi}\log(5-4\cos\theta)\,d\theta=4\pi\log2\approx8{,}7103$ (valeur confirmée numériquement).

## Pièges et variantes

* **Appliquer la propriété de la moyenne sans vérifier que le disque fermé est dans l'ouvert d'harmonicité** : pour $|a|<1$, $\log|e^{i\theta}-a|$ est la trace sur le cercle de $\log|z-a|$, qui **n'est pas** harmonique sur $\bar D(0,1)$ (singularité en $a$) ; si l'on appliquait naïvement la moyenne à $\log|z-a|$, on trouverait $\log|a|$, ce qui est faux. Il faut passer par $\log|1-\bar az|$.
* **Cas $|a|=1$** : la fonction n'est plus harmonique au voisinage du cercle ; la convergence de l'intégrale et le passage à la limite doivent être justifiés (domination indépendante de $r$).
* $\log\max(1,|a|)$ est continue en $|a|=1$ : c'est cohérent avec le passage à la limite de la question 2.
* Variante (formule de Jensen) : si $f$ est holomorphe sur un voisinage de $\bar D(0,1)$, $f(0)\neq0$, de zéros $a_1,\dots,a_n$ dans $D(0,1)$ (avec multiplicité) et sans zéro sur le cercle, alors $\frac1{2\pi}\int_0^{2\pi}\log|f(e^{i\theta})|\,d\theta=\log|f(0)|-\sum_k\log|a_k|$ (écrire $f=g\prod(z-a_k)$ avec $g$ sans zéro et appliquer la moyenne à $\log|g|$).
* Variante : la quantité de la question 3 s'appelle la **mesure de Mahler** de $P$ ; elle vaut $\log|c|$ si et seulement si toutes les racines sont dans $\bar D(0,1)$.
