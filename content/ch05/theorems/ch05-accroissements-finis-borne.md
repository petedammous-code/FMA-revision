---
id: ch05-accroissements-finis-borne
type: corollary
chapter: 5
title: Inégalité des accroissements finis avec borne constante
ref: Corollaire V.4.3
page: 104
importance: 2
depends: [ch05-accroissements-finis-vectoriel]
tags: [accroissements-finis, inegalite, lipschitz, variable-reelle]
---
## Intuition

> 💡 Si un point mobile $f(t)$ dans un espace vectoriel normé $F$ ne dépasse jamais la vitesse $k$, alors entre les instants $a$ et $b$ il ne peut pas s'être éloigné de plus de $k(b-a)$ de son point de départ. C'est l'inégalité « distance $\le$ vitesse maximale $\times$ durée ».

C'est le cas particulier du théorème [[ch05-accroissements-finis-vectoriel]] où le mobile de comparaison $g$ avance à vitesse constante $k$ : $g(t)=kt$. Avec $k=0$, on obtient : **dérivée nulle sur $]a;b[$ et continuité sur $[a;b]$ $\Rightarrow$ $f$ constante**. Ici $f'(t)=df_t(1)\in F$ ([[ch05-derivee-variable-reelle]]).

## Énoncé

**Corollaire (poly, Corollaire V.4.3, p. 104).** Soient $a$ et $b$ deux réels avec $a<b$, et $F$ un espace vectoriel normé. Soit $f:[a;b]\to F$ une application continue sur $[a;b]$ et différentiable sur $]a;b[$. Supposons que pour tout $t\in\,]a;b[$, $\|f'(t)\|_F\le k$, pour une certaine constante $k$. Alors
$$
\|f(b)-f(a)\|_F\le k\,(b-a).
$$

## Hypothèses

### H1 — $f$ continue sur $[a;b]$

**Rôle.** Elle est transmise au Théorème V.4.1, qui l'utilise pour passer des sous-segments $[u;v]\subset\,]a;b[$ au segment $[a;b]$ entier.

**Si on la retire.** $f=\mathbf 1_{\{1\}}$ sur $[0;1]$ (à valeurs dans $\R$) : $f'=0$ sur $]0;1[$, donc $k=0$ convient, mais $|f(1)-f(0)|=1>0$.

### H2 — $f$ différentiable en tout point de $]a;b[$

**Rôle.** Elle est transmise au Théorème V.4.1 (le point de contradiction $w$ obtenu par dichotomie peut être n'importe où dans $]a;b[$).

**Si on la retire.** L'escalier de Cantor $c$ sur $[0;1]$ est continu, dérivable de dérivée nulle hors de l'ensemble de Cantor (non dénombrable), et $|c(1)-c(0)|=1>0\cdot(1-0)$. Un nombre **dénombrable** de points exceptionnels est en revanche permis ([[ch05-accroissements-finis-denombrable]]).

### H3 — Borne **uniforme** $\|f'(t)\|_F\le k$ sur $]a;b[$

**Rôle.** C'est elle qui permet de choisir $g(t)=kt$ dans le Théorème V.4.1 : $\|f'(t)\|_F\le k=g'(t)$.

**Si on la retire.** Le corollaire ne dit plus rien, et l'on ne peut pas trouver de constante convenable en général : $f(t)=\sqrt t$ sur $[0;1]$ est continue, dérivable sur $]0;1[$ avec $f'(t)=\frac1{2\sqrt t}$ non bornée, et $f$ n'est lipschitzienne sur aucun $[0;\eta]$ ($\eta>0$) : $\frac{|f(\eta)-f(0)|}{\eta}=\frac1{\sqrt\eta}$ n'est pas majoré uniformément quand $\eta\to0$. On peut alors encore utiliser le Théorème V.4.1 avec une fonction $g$ non linéaire (ici $g=f$).

## Idée de la preuve

Appliquer le Théorème V.4.1 ([[ch05-accroissements-finis-vectoriel]]) avec $g(t)=kt$.

## Preuve

La fonction $g:[a;b]\to\R$, $g(t)=kt$, est continue sur $[a;b]$ et dérivable sur $]a;b[$ avec $g'(t)=k$ pour tout $t$. L'hypothèse s'écrit donc $\|f'(t)\|_F\le g'(t)$ pour tout $t\in\,]a;b[$, et $f$ est continue sur $[a;b]$, différentiable sur $]a;b[$. Le Théorème V.4.1 ([[ch05-accroissements-finis-vectoriel]]) s'applique et donne
$$
\|f(b)-f(a)\|_F\le g(b)-g(a)=k\,(b-a).\qquad\square
$$
(Remarque : comme $]a;b[\neq\emptyset$ et $\|f'(t)\|_F\ge0$, l'hypothèse force $k\ge0$.)

*Conséquence ($k=0$).* Si $f$ est continue sur $[a;b]$ et $f'(t)=0$ pour tout $t\in\,]a;b[$, alors en appliquant le corollaire sur $[a;x]$ pour chaque $x\in\,]a;b]$, on obtient $f(x)=f(a)$ : $f$ est constante sur $[a;b]$.

## Preuve à trous

On pose <trou indice="quelle fonction de comparaison a pour dérivée la borne k ?">$g(t)=kt$, continue sur $[a;b]$, dérivable sur $]a;b[$ avec $g'=k$</trou>. L'hypothèse devient alors <trou>$\|f'(t)\|_F\le g'(t)$ pour tout $t\in\,]a;b[$</trou>, et le Théorème V.4.1 donne <trou>$\|f(b)-f(a)\|_F\le g(b)-g(a)=k(b-a)$</trou>. $\square$

## Exemples

* **Sinus.** $f=\sin$ sur $[a;b]$, $|f'|=|\cos|\le1$ : $|\sin b-\sin a|\le b-a$. (C'est déjà le TAF scalaire, mais la preuve ici ne passe pas par l'égalité.)
* **Un mobile dans le plan.** $f(t)=(\cos t,\ \sin 2t)\in\R^2$ avec la norme euclidienne : $\|f'(t)\|_2=\sqrt{\sin^2t+4\cos^22t}\le\sqrt{1+4}=\sqrt5$. Donc $\|f(b)-f(a)\|_2\le\sqrt5\,(b-a)$ pour tous $a<b$.
* **Exponentielle de matrices.** Dans $F=\mathrm M_n(\R)$ muni d'une norme d'algèbre, $f(t)=e^{tA}$ a pour dérivée $f'(t)=Ae^{tA}$, et $\|Ae^{tA}\|\le\|A\|e^{t\|A\|}$. Sur $[0;1]$, $k=\|A\|e^{\|A\|}$ convient, d'où $\|e^{A}-I_n\|\le\|A\|e^{\|A\|}$.

## Pièges

* > ⚠️ La borne doit valoir sur **tout** $]a;b[$ ; une borne « sauf en un point » ne suffit que si $f$ reste continue (et différentiable ailleurs) : c'est la Remarque V.4.2, pas ce corollaire.
* Le corollaire est énoncé pour une fonction d'**une variable réelle**. Pour $f:U\subset E\to F$, c'est le TAF [[ch05-accroissements-finis]] qu'il faut citer (il se ramène à ce corollaire le long d'un segment).
* Avec $k=0$ : « $f'=0$ sur un **intervalle** $\Rightarrow$ $f$ constante » ; sur une réunion d'intervalles disjoints, c'est faux (voir [[ch05-differentielle-nulle-constante]]).
