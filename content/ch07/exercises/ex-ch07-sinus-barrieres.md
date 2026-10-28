---
id: ex-ch07-sinus-barrieres
type: exercise
chapters: [7]
title: Des solutions piégées entre deux équilibres
source: Inventé
difficulty: 2
time: 20
tools: [ch07-cauchy-lipschitz, ch07-restriction-domaine-c1-lipschitz, ch07-unicite-globale, ch07-courbe-integrale-maximale-def, ch07-lemme-des-bouts]
---
## Énoncé

On considère l'équation différentielle scalaire
$$
x'(t)=\sin\big(x(t)\big),\qquad x(0)=x_0,
$$
avec $x_0\in\,]0,\pi[$.

1. Montrer que ce problème admet une unique solution maximale $x:J\to\R$, où $J$ est un intervalle ouvert contenant $0$. Quelles sont les solutions constantes de l'équation $x'=\sin x$ ?
2. Montrer que $x(t)\in\,]0,\pi[$ pour tout $t\in J$, et que $x$ est strictement croissante sur $J$.
3. Montrer que $J=\R$, puis que $x(t)\to\pi$ quand $t\to+\infty$ et $x(t)\to0$ quand $t\to-\infty$.
4. Vérifier que $x(t)=2\arctan\big(\tan(x_0/2)\,e^{t}\big)$ et retrouver les résultats des questions 2 et 3.

## Indices

### Indice 1
Le champ $x\mapsto\sin x$ est très régulier : quel théorème donne existence et unicité ? Pour la question 2, que se passerait-il si la solution touchait la valeur $0$ ou $\pi$ ?

### Indice 2
$\sin$ est de classe $C^1$ sur $\R$, donc localement lipschitzienne : Cauchy–Lipschitz et l'unicité globale s'appliquent. Si $x(t_1)=\pi$, comparer $x$ à la solution constante égale à $\pi$ (même condition initiale en $t_1$). Pour la question 3 : la trajectoire reste dans un compact de $\R$ — quel théorème transforme cela en « définie pour tout temps » ?

### Indice 3
Pour la limite en $+\infty$ : $x$ est croissante et majorée, donc a une limite $L\in\,]x_0,\pi]$. Si $L<\pi$, minorer $x'(t)=\sin x(t)$ par une constante $m>0$ pour $t\ge0$ et obtenir $x(t)\ge x_0+mt$.

## Corrigé

**1.** Le champ $X(x)=\sin x$ est autonome ([[ch07-equation-autonome-def]]) et de classe $C^1$ sur l'ouvert $U=\R$, donc localement lipschitzien ([[ch07-restriction-domaine-c1-lipschitz]]) ; il est même $1$-lipschitzien puisque $|\sin'|=|\cos|\le1$ (accroissements finis). Le théorème de Cauchy–Lipschitz ([[ch07-cauchy-lipschitz]]) donne l'existence d'une solution locale, l'unicité globale ([[ch07-unicite-globale]]) montre que deux solutions de même condition initiale coïncident sur l'intersection de leurs intervalles, d'où l'existence et l'unicité de la solution maximale $x:J\to\R$, avec $J=J_0(x_0)$ ouvert contenant $0$ ([[ch07-courbe-integrale-maximale-def]]).

Une fonction constante $x\equiv c$ est solution si et seulement si $0=\sin c$, c'est-à-dire $c\in\pi\Z$. Les solutions constantes sont donc les $x\equiv k\pi$, $k\in\Z$ (les **équilibres**).

**2.** *La solution ne touche ni $0$ ni $\pi$.* Supposons qu'il existe $t_1\in J$ avec $x(t_1)=\pi$. La fonction constante $\pi$, définie sur $\R$, est une courbe intégrale de condition initiale $(t_1,\pi)$, comme $x$. Par l'unicité globale ([[ch07-unicite-globale]], appliquée en $\tau_0=t_1$), $x=\pi$ sur $J\cap\R=J$, donc $x_0=x(0)=\pi$ : contradiction avec $x_0<\pi$. De même $x$ ne prend jamais la valeur $0$.

*Conclusion par connexité.* $x$ est continue sur l'intervalle $J$, $x(0)\in\,]0,\pi[$, et $x$ ne prend ni la valeur $0$ ni la valeur $\pi$ ; par le théorème des valeurs intermédiaires, $x(J)\subset\,]0,\pi[$.

*Croissance.* Pour tout $t\in J$, $x'(t)=\sin x(t)>0$ puisque $x(t)\in\,]0,\pi[$ : $x$ est strictement croissante sur $J$.

**3.** *$J=\R$.* Notons $b=\sup J$. Pour $t\in[0,b[$, $x(t)\in[x_0,\pi[\,\subset[0,\pi]=:K$, compact de $U=\R$. Le champ est autonome et (localement) lipschitzien, donc le lemme des bouts ([[ch07-lemme-des-bouts]]) donne $b=+\infty$. De même, pour $t\in\,]\inf J,0]$, $x(t)\in\,]0,x_0]\subset K$, et la version « borne inférieure » du lemme des bouts donne $\inf J=-\infty$. Donc $J=\R$.

(On pouvait aussi invoquer le caractère globalement lipschitzien de $\sin$, mais l'argument ci-dessus est celui qui se généralise.)

*Limite en $+\infty$.* $x$ est croissante et majorée par $\pi$ sur $[0,+\infty[$, donc admet une limite $L\in\,]x_0,\pi]$. Supposons $L<\pi$. Pour $t\ge0$, $x(t)\in[x_0,L]\subset\,]0,\pi[$ et, $\sin$ étant concave sur $[0,\pi]$, son minimum sur le segment $[x_0,L]$ est atteint en une extrémité :
$$
x'(t)=\sin x(t)\ \ge\ m:=\min(\sin x_0,\sin L)>0 .
$$
En intégrant, $x(t)\ge x_0+mt\to+\infty$, contradiction avec $x\le\pi$. Donc $L=\pi$.

*Limite en $-\infty$.* De même $x$ est croissante et minorée par $0$ sur $]-\infty,0]$, donc tend vers $\ell\in[0,x_0[$ en $-\infty$. Si $\ell>0$, pour $t\le0$ on a $x(t)\in[\ell,x_0]$ et $x'(t)\ge m'=\min(\sin\ell,\sin x_0)>0$, d'où $x(t)\le x_0+m't\to-\infty$ quand $t\to-\infty$ : contradiction. Donc $\ell=0$.

**4.** Posons $k=\tan(x_0/2)>0$ (car $x_0/2\in\,]0,\pi/2[$) et $y(t)=2\arctan(ke^t)$, définie et $C^1$ sur $\R$. Alors $y(0)=2\cdot\frac{x_0}2=x_0$ et
$$
y'(t)=\frac{2ke^t}{1+k^2e^{2t}} .
$$
Par ailleurs, avec $u=\tan(y/2)=ke^t$, la formule $\sin y=\dfrac{2\tan(y/2)}{1+\tan^2(y/2)}$ donne $\sin y(t)=\dfrac{2ke^t}{1+k^2e^{2t}}=y'(t)$. Donc $y$ est une solution définie sur $\R$ de condition initiale $(0,x_0)$ ; par unicité et maximalité, $J=\R$ et $x=y$. On retrouve : $ke^t\in\,]0,+\infty[$ donc $x(t)\in\,]0,\pi[$ ; $x$ est strictement croissante (composée de fonctions strictement croissantes) ; $ke^t\to+\infty$ en $+\infty$ donne $x\to2\cdot\frac\pi2=\pi$, et $ke^t\to0$ en $-\infty$ donne $x\to0$.

## Pièges et variantes

* **Oublier l'unicité dans la question 2.** « La solution ne peut pas traverser l'équilibre $\pi$ » n'est **pas** une évidence : c'est une conséquence de l'unicité. Pour $x'=2\sqrt{|x|}$ (champ continu mais non lipschitzien en $0$), une solution peut quitter l'équilibre $0$ en temps fini ([[ch07-peano-non-unicite]]).
* **Lemme des bouts : le compact doit être dans $U$.** Ici $U=\R$ et $[0,\pi]$ convient. Écrire seulement « $x$ est bornée » suffit en dimension finie avec $U=\R^n$, mais il faut le dire.
* **Limite d'une fonction monotone ≠ limite de la dérivée.** On ne peut pas conclure $L=\pi$ en disant « $x'\to0$ » sans argument ; le raisonnement par l'absurde de la question 3 (ou le fait que la limite d'une solution bornée monotone est un équilibre) est nécessaire.
* Variante : pour $x_0\in\,]\pi,2\pi[$, la solution est **décroissante**, définie sur $\R$, tend vers $\pi$ en $+\infty$ et vers $2\pi$ en $-\infty$ : $\pi$ est un équilibre **attractif** (car $\sin'(\pi)=-1<0$), $0$ et $2\pi$ sont **répulsifs** ($\cos(0)=1>0$).
* Variante : pour $x'=\sin^2 x$, même confinement entre deux multiples consécutifs de $\pi$, mais les solutions sont croissantes partout ; $x(t)\to(k+1)\pi$ en $+\infty$ et $\to k\pi$ en $-\infty$.
