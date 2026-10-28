---
id: ch08-du-bois-reymond-derivee
type: lemma
chapter: 8
title: "Variante du lemme de du Bois-Reymond : $\int\langle A,h\rangle+\langle B,h'\rangle=0$ pour tout $h$ entraîne $B'=A$"
ref: "Question 4, p. 144 (non numérotée, section VIII)"
page: 144
importance: 2
depends: [ch08-du-bois-reymond, ch05-primitive-integrale, ch05-formule-leibniz, ch05-theoreme-fondamental]
tags: [du-bois-reymond, integration-par-parties, regularite, fonction-test, calcul-des-variations]
---
## Intuition

> 💡 Si $B$ était dérivable, une intégration par parties transformerait $\int_0^1\langle B,h'\rangle$ en $-\int_0^1\langle B',h\rangle$ (pas de terme de bord car $h(0)=h(1)=0$), et l'hypothèse deviendrait $\int_0^1\langle A-B',h\rangle=0$ pour toute $h$, d'où $B'=A$. Le lemme dit que cette conclusion reste vraie **sans savoir à l'avance que $B$ est dérivable** : la dérivabilité de $B$ fait partie de la conclusion.

L'astuce : au lieu de dériver $B$ (interdit), on **intègre** $A$ (permis, $A$ est continue). On pose $C(t)=\int_0^tA(s)\,ds$, qui est $C^1$ de dérivée $A$ ; l'intégration par parties se fait sur $C$, et l'hypothèse devient $\int_0^1\langle B-C,h'\rangle=0$. Le lemme de du Bois-Reymond ([[ch08-du-bois-reymond]]) dit alors que $B-C$ est constante, donc $B=C+\text{cste}$ est dérivable de dérivée $A$.

C'est le lemme qui produit l'équation d'Euler-Lagrange ([[ch08-euler-lagrange]]) avec $A=\frac{\partial L}{\partial q}(t,\gamma,\gamma')$ et $B=\frac{\partial L}{\partial v}(t,\gamma,\gamma')$. $V$ est un espace de Hilbert de dimension finie ([[ch08-cadre-espace-courbes]]).

## Énoncé

**Lemme (poly, Question 4, p. 144).** Soient $A,B:[0;1]\to V$ des fonctions continues telles que pour toute fonction $h\in C^1([0;1];V)$ vérifiant $h(0)=h(1)=0$, on a
$$
\int_0^1\Big(\langle A(t),h(t)\rangle+\langle B(t),h'(t)\rangle\Big)\,dt=0 .
$$
Alors $B$ est différentiable (dérivable sur $[0;1]$, avec dérivées unilatérales en $0$ et $1$) et $B'=A$. En particulier $B$ est de classe $C^1$.

## Hypothèses

### H1 — $A$ est continue

**Rôle.** Elle rend $C(t)=\int_0^tA(s)\,ds$ de classe $C^1$ avec $C'=A$ ([[ch05-primitive-integrale]]), ce qui permet l'intégration par parties $\int_0^1\langle A,h\rangle=-\int_0^1\langle C,h'\rangle$.

**Si on la retire.** Exemple vérifié avec $V=\R$ : $A=\mathbf 1_{[1/2,1]}$ (réglée, non continue) et $B(t)=\max\big(t-\frac12,0\big)$ (continue). Pour $h\in C^1$ avec $h(0)=h(1)=0$, une intégration par parties sur $[\frac12,1]$ donne
$$
\int_{1/2}^1\big(t-\tfrac12\big)h'(t)\,dt=\Big[\big(t-\tfrac12\big)h(t)\Big]_{1/2}^1-\int_{1/2}^1h(t)\,dt=-\int_{1/2}^1h(t)\,dt ,
$$
donc $\int_0^1(Ah+Bh')\,dt=\int_{1/2}^1h-\int_{1/2}^1h=0$ : l'hypothèse intégrale est vérifiée. Pourtant $B$ n'est pas dérivable en $\frac12$ (dérivée à gauche $0$, à droite $1$). La conclusion « $B$ dérivable, $B'=A$ » tombe ; il ne reste que « $B'=A$ hors d'un point ».

### H2 — $B$ est continue

**Rôle.** C'est l'hypothèse du lemme de du Bois-Reymond, appliqué à la fonction **continue** $B-C$.

**Si on la retire.** $V$ quelconque, $e\in V$ non nul, $A=0$ et $B(t)=0$ pour $t\neq\frac12$, $B(\frac12)=e$. L'intégrande $\langle B,h'\rangle$ est nul sauf en un point, donc l'identité est vraie pour toute $h$ ; mais $B$, non continue en $\frac12$, n'est pas dérivable.

### H3 — L'identité pour toutes les $h\in C^1$ nulles en $0$ et en $1$

**Rôle.** La condition $h(0)=h(1)=0$ supprime le terme de bord de l'intégration par parties ; la richesse de la famille des $h$ est ce qui permet d'appliquer [[ch08-du-bois-reymond]].

**Si on la retire.** Si l'identité est vraie pour **toutes** les $h\in C^1([0;1];V)$, on obtient davantage : $B'=A$ (le lemme s'applique), puis $0=\int_0^1\big(\langle B',h\rangle+\langle B,h'\rangle\big)dt=\langle B(1),h(1)\rangle-\langle B(0),h(0)\rangle$ ; avec $h(t)=tw$ puis $h(t)=(1-t)w$ ($w\in V$ quelconque) il vient $B(1)=B(0)=0$. Ce sont les « conditions aux bords naturelles » du calcul des variations à extrémités libres.

## Idée de la preuve

Poser $C(t)=\int_0^tA(s)\,ds$ ($C^1$, $C'=A$). Pour $h$ nulle aux bords, $\int_0^1\big(\langle A,h\rangle+\langle C,h'\rangle\big)=\big[\langle C,h\rangle\big]_0^1=0$, donc l'hypothèse s'écrit $\int_0^1\langle B-C,h'\rangle=0$. Par du Bois-Reymond, $B-C$ est une constante $c$, donc $B=C+c$ est $C^1$ et $B'=A$.

## Preuve

*Étape 1 : une primitive de $A$.* Posons $C(t)=\int_0^tA(s)\,ds$ pour $t\in[0;1]$. Comme $A$ est continue, $C$ est dérivable de dérivée $A$ sur $]0;1[$ ([[ch05-primitive-integrale]]), et la même majoration $\norm{C(t+k)-C(t)-A(t)k}_V\le|k|\sup_{|s-t|\le|k|}\norm{A(s)-A(t)}_V$ donne les dérivées unilatérales en $0$ et $1$. Ainsi $C\in C^1([0;1];V)$ et $C'=A$.

*Étape 2 : intégration par parties.* Soit $h\in C^1([0;1];V)$ avec $h(0)=h(1)=0$. La fonction $\varphi(t)=\langle C(t),h(t)\rangle$ est la composée de $t\mapsto(C(t),h(t))$, de classe $C^1$, et du produit scalaire, application bilinéaire continue sur $V\times V$ ; par la formule de Leibniz ([[ch05-formule-leibniz]]), $\varphi$ est $C^1$ et
$$
\varphi'(t)=\langle C'(t),h(t)\rangle+\langle C(t),h'(t)\rangle=\langle A(t),h(t)\rangle+\langle C(t),h'(t)\rangle .
$$
Comme $\varphi'$ est continue, $\int_0^1\varphi'(t)\,dt=\varphi(1)-\varphi(0)$ (la fonction $t\mapsto\varphi(t)-\int_0^t\varphi'$ est continue sur $[0;1]$ et de dérivée nulle sur $]0;1[$, donc constante : c'est l'argument de [[ch05-theoreme-fondamental]]). Or $\varphi(1)=\langle C(1),h(1)\rangle=0$ et $\varphi(0)=\langle C(0),h(0)\rangle=0$. Donc
$$
\int_0^1\langle A(t),h(t)\rangle\,dt=-\int_0^1\langle C(t),h'(t)\rangle\,dt .
$$

*Étape 3 : du Bois-Reymond.* En reportant dans l'hypothèse, pour toute $h\in C^1([0;1];V)$ nulle en $0$ et en $1$,
$$
\int_0^1\big\langle B(t)-C(t),h'(t)\big\rangle\,dt=0 .
$$
La fonction $B-C$ est continue (différence de deux fonctions continues). Par le lemme de du Bois-Reymond ([[ch08-du-bois-reymond]]), $B-C$ est constante : il existe $c\in V$ tel que $B(t)=C(t)+c$ pour tout $t\in[0;1]$.

*Conclusion.* $B=C+c$ est dérivable sur $[0;1]$ et $B'=C'=A$, qui est continue : $B$ est de classe $C^1$. $\square$

## Preuve à trous

On introduit <trou indice="on ne peut pas dériver B, mais on peut intégrer A">la primitive $C(t)=\int_0^tA(s)\,ds$, de classe $C^1$ avec $C'=A$ car $A$ est continue</trou>.

Pour $h\in C^1([0;1];V)$ nulle en $0$ et $1$, la fonction $t\mapsto\langle C(t),h(t)\rangle$ a pour dérivée $\langle A,h\rangle+\langle C,h'\rangle$, d'où, en intégrant, <trou indice="les valeurs de h aux bords">$\int_0^1\big(\langle A,h\rangle+\langle C,h'\rangle\big)dt=\langle C(1),h(1)\rangle-\langle C(0),h(0)\rangle=0$</trou>.

L'hypothèse devient donc <trou>$\int_0^1\langle B-C,h'\rangle\,dt=0$ pour toute $h$ admissible, avec $B-C$ continue</trou>, et <trou indice="lemme de la question 3">le lemme de du Bois-Reymond donne $B-C=c$ constante</trou>. Ainsi $B=C+c$ est $C^1$ et $B'=A$. $\square$

## Exemples

* **Vérification directe.** $V=\R$, $A(t)=2$, $B(t)=2t+5$. Pour $h$ nulle aux bords : $\int_0^1\big(2h+(2t+5)h'\big)dt=2\int_0^1h+\big[(2t+5)h\big]_0^1-2\int_0^1h=0$. Conformément au lemme, $B'=2=A$ ; la constante $5$ n'est pas déterminée.
* **Le « lemme fondamental du calcul des variations ».** Avec $B=0$ : si $A$ est continue et $\int_0^1\langle A,h\rangle=0$ pour toute $h\in C^1$ nulle aux bords, alors $A=B'=0$.
* **Régularité gratuite des points critiques.** Pour $V=\R$, $L(u,q,v)=\frac12v^2-U(q)$ ($U$ de classe $C^1$) et $\gamma$ critique pour $\hat L|_{E_{a,b}}$, on a $A=-U'(\gamma)$ et $B=\gamma'$ ([[ch08-lhat-c1-differentielle]]). Le lemme donne : $\gamma'$ est dérivable et $\gamma''=-U'(\gamma)$, qui est continue. Donc $\gamma$, supposée seulement $C^1$, est en fait $C^2$ et vérifie l'équation de Newton ([[ch08-equation-newton]]).

## Pièges

* > ⚠️ On ne suppose **pas** $B$ dérivable : on le démontre. Une rédaction qui commence par « intégrons par parties $\int\langle B,h'\rangle$ » est fausse (ou alors elle démontre un énoncé plus faible, sous l'hypothèse supplémentaire $B\in C^1$).
* L'intégration par parties se fait sur $C=\int_0^tA$, pas sur $B$ ; elle n'a pas de terme de bord parce que $h(0)=h(1)=0$.
* $B$ n'est déterminée qu'à une constante près par $A$ : la condition $B'=A$ est tout ce que l'on obtient (sauf à tester aussi des $h$ non nulles aux bords, H3).
* Aux extrémités $t=0$ et $t=1$, « $B$ dérivable » s'entend au sens des dérivées unilatérales, comme pour toute fonction de $C^1([0;1];V)$.
